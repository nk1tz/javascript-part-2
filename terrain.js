//contruction function tile

var terrainBoard = [];
createBoard();
for(var h = 0; h<999; h++){
    outputBoard();
    randomEvent();
}

function Tile(x,y){
    var obj = {};
    return obj = { coordi: x, coordj: y, height: randomIntFromInterval(1,3), type: randomGrassRocksWater(), condition: randomBurningNormalFrozen() };
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomGrassRocksWater(){
    var select = randomIntFromInterval(1,3);
    if(select === 1) return "grass";
    if(select === 2) return "rocks";
    if(select === 3) return "water";
}

function randomBurningNormalFrozen(){
    var select = randomIntFromInterval(1,3);
    if(select === 1) return "burning";
    if(select === 2) return "normal";
    if(select === 3) return "frozen";
}

function freeze(obj){
    if(this.condition === "burning"){
        this.condition = "normal";
    }else if(this.condition === "normal"){
        this.condition = "frozen";
    }else if(this.condition === "frozen"){
        this.height += 1;
    }
}

function burn(obj){
    if(this.condition === "frozen"){
        this.condition = "normal";
    }else if(this.condition === "normal"){
        this.condition = "burning";
    }else if(this.condition === "burning" && this.height > 0){
        this.height -= 1;
    }
}

function createBoard(){
    for(var i = 0; i < 20; i++){
        terrainBoard[i] = [];
        for(var j = 0; j < 20; j++){
            terrainBoard[i][j] = new Tile(i,j);
        }
    }
}

function outputBoard(){
    console.log (" ");
    var row = "";
    for(var j = 0; j < 20; j++){
        for(var i = 0; i < 20; i++){
            row += terrainBoard[i][j].height + " ";
        }
        console.log(row);
        row = "";
    }  
    console.log (" ");
}

function randomEvent(){
    var event = randomIntFromInterval(1,2);
    if(event === 1){
        var i = randomIntFromInterval(0,19);
        var j = randomIntFromInterval(0,19);
        freeze.apply( terrainBoard[i][j] );
    }
     if(event === 2){
        var i = randomIntFromInterval(0,19);
        var j = randomIntFromInterval(0,19);
        burn.apply( terrainBoard[i][j] );
    }  
}