"use strict";

class Grid {
    constructor(height, width, context) {
        this.height = height / Case.height;
        this.width = width / Case.width;
        this.context = context;
        this.grid = undefined;

        this.grid = new Array(this.width);
        for (let i=0; i<this.width; i++) {
            this.grid[i] = new Array(this.height);
            for (let j=0; j<this.height; j++) {
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
    static get width() { return 15 };
    static get height() { return 15 }

    constructor(posX, posY, context) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.color = new Color(1, 1, 1);
    }

    draw() {
        this.context.fillStyle = this.color.getCss();
        this.context.fillRect(this.posX * Case.width, this.posY * Case.height, Case.width, Case.height);
    }
}

class CheckPoint extends Case {
    static get findersByCheckPoint() { return 5 };

    constructor(grid, context) {
        const posX = Math.round(Math.random() * (grid.width - 1));
        const posY = Math.round(Math.random() * (grid.height - 1));
        super(posX, posY, context);
        this.grid = grid;

        const typeSelector = Math.round(Math.random() * 2)

        switch(typeSelector) {
            case 0:
                this.checkPointType = "red";
                this.color = new Color(255, 0, 0);
                break;
            case 1:
                this.checkPointType = "green";
                this.color = new Color(0, 255, 0);
                break;
            case 2:
                this.checkPointType = "blue";
                this.color = new Color(0, 0, 255);
                break;
        }

        this.finders = [];
        for (let i=0; i<CheckPoint.findersByCheckPoint; i++) {
            this.finders.push(new Finder(this));
        }

        grid.grid[posX][posY] = this;
    }
}

class Color {
    constructor(red = 0, green = 0, blue = 0) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    add(color) {
        switch(color) {
            case "red":
                if (this.red < 255) this.red++;
                break;
            case "green":
                if (this.red < 255) this.green++;
                break;
            case "blue":
                if (this.blue < 255) this.blue++;
                break;
        }
    }

    get(color) {
        switch(color) {
            case "red":
                return this.red;
            case "green":
                return this.green;
            case "blue":
                return this.blue;
        }
    }

    getCss() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
}

class Finder {
    constructor(checkPoint) {
        this.checkPoint = checkPoint;
        this.posX = this.checkPoint.posX;
        this.posY = this.checkPoint.posY;
        this.history = [];
        this.history.push([this.posX, this.posY]);
    }

    reset() {
        this.posX = this.checkPoint.posX;
        this.posY = this.checkPoint.posY;
        this.history = [];
        this.history.push([this.posX, this.posY]);
    }

    save() {
        const {grid} = this.checkPoint;
        this.history.forEach(([x, y]) => {
            grid.grid[x][y].color.add(this.checkPoint.checkPointType);
            grid.grid[x][y].draw();
        });

        this.reset();
    }

    work() {
        const {grid} = this.checkPoint;
        let directions = ["top", "right", "bottom", "left"];

        const dropDir = (dir) => {
            directions.splice(directions.indexOf(dir), 1);
        }

        const getDirCase = (dir) => {
            switch (dir) {
                case "top":
                    return grid.grid[this.posX][this.posY-1];
                case "right":
                    return grid.grid[this.posX+1][this.posY];
                case "bottom":
                    return grid.grid[this.posX][this.posY+1];
                case "left":
                    return grid.grid[this.posX-1][this.posY];
            }
        }

        if (this.posX <= 0) dropDir("left");
        if (this.posY <= 0) dropDir("top");
        if (this.posX >= (grid.width - 1)) dropDir("right");
        if (this.posY >= (grid.height - 1)) dropDir("bottom");

        directions.forEach(dir => {
            const dirCase = getDirCase(dir)
            this.history.forEach(([x, y]) => {
                if (dirCase.posX == x && dirCase.posY == y) {
                    dropDir(dir);
                }
            });
        });

        let statisticRepartition = 0;
        directions.forEach(dir => statisticRepartition += getDirCase(dir)
                .color.get(this.checkPoint.checkPointType));
        
        const randomChoice = Math.round(Math.random() * statisticRepartition);
        let actualStaticJauge = 0;
        let directionChoice = null;

        for (const dir of directions) {
            actualStaticJauge += getDirCase(dir).color.get(this.checkPoint.checkPointType);
            if (randomChoice < actualStaticJauge) {
                directionChoice = dir;
                break;
            }
        }

        switch (directionChoice) {
            case "top":
                this.posY--;
                break;
            case "right":
                this.posX++;
                break;
            case "bottom":
                this.posY++;
                break;
            case "left":
                this.posX--;
                break;
            default:
                this.reset();
                return null;
        }

        if (grid.grid[this.posX][this.posY].checkPointType 
            && grid.grid[this.posX][this.posY].checkPointType === this.checkPoint.checkPointType) {
            
            this.save();
            return null;
        }

        if (this.history.length > Math.sqrt(grid.height*grid.height*grid.width*grid.width)) {
            this.reset();
            return null;
        }

        this.history.push([this.posX, this.posY]);
    }
}

const canvas = document.getElementById("bg-canvas");
let screenLoop;

module.exports = function load() {
    clearInterval(screenLoop);

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        canvas.height = Math.round(window.innerHeight / Case.width)*Case.width;
        canvas.width = Math.round(window.innerWidth / Case.height)*Case.height;
        const grid = new Grid(canvas.height, canvas.width, ctx);
    
        let checkPoints = [];
        for (let i=0; i<((grid.width/2)*(grid.height/2)); i++) {
            checkPoints.push(new CheckPoint(grid, ctx));
        }
    
        grid.draw();
        screenLoop = setInterval(() => {
            checkPoints.forEach(cp => cp.finders.forEach(f => f.work()));
        }, 250);
    }
}