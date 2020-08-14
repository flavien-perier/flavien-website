"use strict";

const CASE_WIDTH = 15;
const CASE_HEIGHT = 15;

const WORKERS_BY_CHECK_POINT = 5;

class Grid {
    constructor(height, width, context) {
        this.height = height / CASE_HEIGHT;
        this.width = width / CASE_WIDTH;
        this.context = context;
        this.grid = new Array(this.width);

        this.workerMaximumDistance = Math.sqrt(this.grid.height * this.grid.height * this.grid.width * this.grid.width);

        for (let i=0; i < this.width; i++) {
            this.grid[i] = new Array(this.height);
            for (let j=0; j < this.height; j++) {
                this.grid[i][j] = new Case(i, j, this.context);
            }
        }

        this.draw();
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

    draw() {
        this.context.fillStyle = this.color.getCss();
        this.context.fillRect(this.posX * CASE_WIDTH, this.posY * CASE_HEIGHT, CASE_WIDTH, CASE_HEIGHT);
    }
}

class CheckPoint extends Case {
    constructor(grid, context) {
        const posX = Math.round(Math.random() * (grid.width - 1));
        const posY = Math.round(Math.random() * (grid.height - 1));
        super(posX, posY, context);
        this.grid = grid;

        const randomCheckPointType = Math.round(Math.random() * 3 - 0.5);

        switch(randomCheckPointType) {
            case 0: // red
                this.checkPointType = "r";
                this.color = new Color(255, 0, 0);
                break;
            case 1: // green
            this.checkPointType = "g";
                this.color = new Color(0, 255, 0);
                break;
            case 2: // blue
                this.checkPointType = "b";
                this.color = new Color(0, 0, 255);
                break;
        }

        this.WORKERS = [];
        for (let i=0; i < WORKERS_BY_CHECK_POINT; i++) {
            this.WORKERS.push(new Worker(this));
        }

        grid.grid[posX][posY] = this;
    }
}

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
            this.grid.grid[x][y].color.add(this.checkPoint.checkPointType);
            this.grid.grid[x][y].draw();
        });

        this.reset();
    }

    getDirCase(dir) {
        switch (dir) {
            case "t":
                return this.grid.grid[this.posX][this.posY-1];
            case "r":
                return this.grid.grid[this.posX+1][this.posY];
            case "b":
                return this.grid.grid[this.posX][this.posY+1];
            case "l":
                return this.grid.grid[this.posX-1][this.posY];
        }
    }

    work() {
        const directions = ["t", "r", "b", "l"]; // top, right, bottom, left

        const dropDir = (dir) => {
            directions.splice(directions.indexOf(dir), 1);
        }

        if (this.posX <= 0) dropDir("l");
        if (this.posY <= 0) dropDir("t");
        if (this.posX >= (this.grid.width - 1)) dropDir("r");
        if (this.posY >= (this.grid.height - 1)) dropDir("b");

        directions.forEach(dir => {
            const dirCase = this.getDirCase(dir)
            this.history.forEach(([x, y]) => {
                if (dirCase.posX == x && dirCase.posY == y) {
                    dropDir(dir);
                }
            });
        });

        const statisticRepartition = directions.reduce((accumulator, dir) => 
            accumulator += this.getDirCase(dir).color.get(this.checkPoint.checkPointType), 0
        );
        
        const randomChoice = Math.random() * statisticRepartition;
        let actualStatisticJauge = 0;
        let directionChoice = null;

        for (const dir of directions) {
            actualStatisticJauge += this.getDirCase(dir).color.get(this.checkPoint.checkPointType);
            if (randomChoice < actualStatisticJauge) {
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
                this.posX--;
                break;
            default:
                this.reset();
                return null;
        }

        if (this.grid.grid[this.posX][this.posY].checkPointType 
            && this.grid.grid[this.posX][this.posY].checkPointType == this.checkPoint.checkPointType) {
            
            this.save();
            return null;
        }

        if (this.history.length > this.grid.workerMaximumDistance) {
            this.reset();
            return null;
        }

        this.history.push([this.posX, this.posY]);
    }
}

const canvas = document.getElementById("bg-canvas");
let screenLoop;

function geneticLoader() {
    clearInterval(screenLoop);

    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        canvas.height = Math.round(window.innerHeight / CASE_WIDTH) * CASE_WIDTH;
        canvas.width = Math.round(window.innerWidth / CASE_HEIGHT) * CASE_HEIGHT;
        const grid = new Grid(canvas.height, canvas.width, ctx);
    
        const checkPoints = [];
        for (let i=0; i < ((grid.width / 2) * (grid.height / 2)); i++) {
            checkPoints.push(new CheckPoint(grid, ctx));
        }
    
        grid.draw();
        screenLoop = setInterval(() => {
            checkPoints.forEach(cp => cp.WORKERS.forEach(f => f.work()));
        }, 100);

        setTimeout(() => {
            clearInterval(screenLoop);
        }, 30000);
    }
}

geneticLoader();
window.addEventListener("resize", () => geneticLoader());
