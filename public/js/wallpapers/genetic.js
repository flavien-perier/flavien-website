"use strict";

const CASE_WIDTH = 15;
const CASE_HEIGHT = 15;

const WORKERS_BY_CHECK_POINT = 3;
const CHECK_POINT_DENSITY = 0.1;

const WORKERS_LOOP_INTERVAL = 100;
const REDUCE_GRID_WEIGHT_LOOP_INTERVAL = 3000;
const MANAGE_CHECK_POINTS_LOOP_INTERVAL = 10000;

class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    add(color) {
        switch(color) {
            case "r":
                if (this.red < 255) this.red++;
                break;
            case "g":
                if (this.green < 255) this.green++;
                break;
            case "b":
                if (this.blue < 255) this.blue++;
                break;
        }
    }

    get(color) {
        switch(color) {
            case "r":
                return this.red;
            case "g":
                return this.green;
            case "b":
                return this.blue;
        }
    }

    getCss() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}

class Grid {
    constructor(height, width, context) {
        this.height = height / CASE_HEIGHT;
        this.width = width / CASE_WIDTH;
        this.context = context;
        this.grid = new Array(this.width);

        this.workerMaximumDistance = Math.sqrt(this.grid.height * this.grid.height * this.grid.width * this.grid.width);

        let i, j;
        for (i=0; i < this.width; i++) {
            this.grid[i] = new Array(this.height);
            for (j=0; j < this.height; j++) {
                this.grid[i][j] = new Case(i, j, this.context);
            }
        }

        this.draw();
    }

    get(x, y) {
        return this.grid[x][y];
    }

    draw() {
        this.grid.forEach(column => column.forEach(element => element.draw()));
    }
}

class Case {
    constructor(posX, posY, context) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.color = new Color(1, 1, 1);
    }

    minus() {
        this.color.red -= Math.round(Math.log(this.color.red));
        this.color.green -= Math.round(Math.log(this.color.green));
        this.color.blue -= Math.round(Math.log(this.color.blue));
    }

    isCheckPoint() {
        return false;
    }

    draw() {
        this.context.fillStyle = this.color.getCss();
        this.context.fillRect(this.posX * CASE_WIDTH, this.posY * CASE_HEIGHT, CASE_WIDTH, CASE_HEIGHT);
    }
}

class CheckPoint extends Case {
    constructor(grid, context) {
        let posX;
        let posY;

        // Test if the selected position is not a CheckPoint.
        do {
            posX = Math.round(Math.random() * (grid.width - 1));
            posY = Math.round(Math.random() * (grid.height - 1));
        } while(grid.get(posX, posY).isCheckPoint());
        
        super(posX, posY, context);
        this.grid = grid;

        const randomCheckPointType = Math.round(Math.random() * 3 - 0.5);

        switch(randomCheckPointType) {
            case 0: // red
                this.checkPointType = "r";
                this.color.red = 255;
                break;
            case 1: // green
            this.checkPointType = "g";
                this.color.green = 255;
                break;
            case 2: // blue
                this.checkPointType = "b";
                this.color.blue = 255;
                break;
        }

        this.workers = [];
        for (let i=0; i < WORKERS_BY_CHECK_POINT; i++) {
            this.workers.push(new Worker(this));
        }

        grid.grid[posX][posY] = this;
    }

    minus() {
        if (this.checkPointType != "r") {
            this.color.red -= Math.round(Math.log(this.color.red));
        }
        if (this.checkPointType != "g") {
            this.color.green -= Math.round(Math.log(this.color.green));
        }
        if (this.checkPointType != "b") {
            this.color.blue -= Math.round(Math.log(this.color.blue));
        }
    }

    isCheckPoint() {
        return true;
    }

    work() {
        this.workers.forEach(f => f.work())
    }
}

class Worker {
    constructor(checkPoint) {
        this.checkPoint = checkPoint;
        this.grid = checkPoint.grid;
        this.reset();
    }

    reset() {
        this.posX = this.checkPoint.posX;
        this.posY = this.checkPoint.posY;
        this.history = [];
        this.history.push([this.posX, this.posY]);
    }

    save() {
        this.history.forEach(([x, y]) => {
            this.grid.get(x, y).color.add(this.checkPoint.checkPointType);
            this.grid.get(x, y).draw();
        });

        this.reset();
    }

    getDirCase(dir) {
        switch (dir) {
            case "t":
                return this.grid.get(this.posX, this.posY-1);
            case "r":
                return this.grid.get(this.posX+1, this.posY);
            case "b":
                return this.grid.get(this.posX, this.posY+1);
            case "l":
                return this.grid.get(this.posX-1, this.posY);
        }
    }

    work() {
        const directions = new Set(["t", "r", "b", "l"]); // top, right, bottom, left

        // Removes travel possibilities within the map limits.
        if (this.posX <= 0) directions.delete("l");
        if (this.posY <= 0) directions.delete("t");
        if (this.posX >= (this.grid.width - 1)) directions.delete("r");
        if (this.posY >= (this.grid.height - 1)) directions.delete("b");

        // Prevents a worker from being in the same place twice.
        directions.forEach(dir => {
            const dirCase = this.getDirCase(dir)
            this.history.forEach(([x, y]) => {
                if (dirCase.posX == x && dirCase.posY == y) {
                    directions.delete(dir);
                }
            });
        });

        // If all directions have been deleted reset.
        if (directions.size == 0) {
            this.reset();
            return;
        }

        // The sum of all the values of the case on which it is possible to move it.
        const sumCase = [...directions].reduce((accumulator, dir) => 
            accumulator += this.getDirCase(dir).color.get(this.checkPoint.checkPointType), 0
        );
        
        // A random value between 0 and `sumCase`.
        const randomChoice = Math.random() * sumCase;

        // Determines the direction according to the `randomChoice`.
        let actualStatisticJauge = 0;
        let directionChoice = null;

        for (const dir of directions) {
            actualStatisticJauge += this.getDirCase(dir).color.get(this.checkPoint.checkPointType);
            if (randomChoice <= actualStatisticJauge) {
                directionChoice = dir;
                break;
            }
        }

        switch (directionChoice) {
            case "t":
                this.posY--;
                break;
            case "r":
                this.posX++;
                break;
            case "b":
                this.posY++;
                break;
            case "l":
                this.posX--;reduceGridWeights
        }

        // Test if the case found is a checkpoint and if it is of the same type as the one you came from.
        if (this.grid.get(this.posX, this.posY).isCheckPoint()
            && this.grid.get(this.posX, this.posY).checkPointType == this.checkPoint.checkPointType) {
            
            this.save();
            return;
        }

        // Test if the worker has covered too much distance.
        if (this.history.length > this.grid.workerMaximumDistance) {
            this.reset();
            return;
        }

        this.history.push([this.posX, this.posY]);
    }
}

function reduceGridWeights(grid) {
    grid.grid.forEach(column => column.forEach(element => element.minus()));
    grid.draw();
}

function manageCheckPoints(checkPoints, grid, ctx) {
    // Create new checkpoint, or delete an existing checkpoint.
    if (Math.random() > 0.5) {
        checkPoints.push(new CheckPoint(grid, ctx));
    } else {
        const deletedCheckPointIndex = Math.floor(Math.random() * checkPoints.length);
        const posX = checkPoints[deletedCheckPointIndex].posX;
        const posY = checkPoints[deletedCheckPointIndex].posY;

        grid.grid[posX][posY] = new Case(posX, posY, ctx);

        delete checkPoints[deletedCheckPointIndex];
        grid.grid[posX][posY].draw();
    }
}

const canvas = document.getElementById("bg-canvas");
let workersLoop;
let reduceGridWeightLoop;
let manageCheckPointsLoop;

function geneticLoader() {
    clearInterval(workersLoop);
    clearInterval(reduceGridWeightLoop);
    clearInterval(manageCheckPointsLoop);

    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        canvas.height = Math.round(window.innerHeight / CASE_WIDTH) * CASE_WIDTH;
        canvas.width = Math.round(window.innerWidth / CASE_HEIGHT) * CASE_HEIGHT;
        const grid = new Grid(canvas.height, canvas.width, ctx);
    
        let checkPoints = [];
        for (let i=0; i < (grid.width * grid.height * CHECK_POINT_DENSITY); i++) {
            checkPoints.push(new CheckPoint(grid, ctx));
        }
    
        grid.draw();

        workersLoop = setInterval(() => {
            checkPoints.forEach(cp => cp.work());
        }, WORKERS_LOOP_INTERVAL);

        reduceGridWeightLoop = setInterval(() => {
            reduceGridWeights(grid);
        }, REDUCE_GRID_WEIGHT_LOOP_INTERVAL);

        manageCheckPointsLoop = setInterval(() => {
            manageCheckPoints(checkPoints, grid, ctx);

            // We only keep the CheckPoints that are not removed.
            checkPoints = checkPoints.filter(cp => cp);
        }, MANAGE_CHECK_POINTS_LOOP_INTERVAL);
    }
}

geneticLoader();
window.addEventListener("resize", geneticLoader);
