// Warriors

//warriors constructor function
function fight() {
    console.log(this.name + " rushes into the arena with a " + this.weapon);
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function faceoff(opponent){
    if(this.power > opponent.power){
        if(this.gender === "M"){
            return this.name + " has vanquished " + opponent.name + " thanks to "+ "his" + " superior strength";
        } else{
            return this.name + " has vanquished " + opponent.name + " thanks to "+ "her" + " superior strength";
        }
    } else if(this.power < opponent.power){
        return opponent.name + " has stuck down " + this.name + " with a powerful blow";
    } else {
        return this.name + " and " + opponent.name + " are deadlocked in strenght and neither can overcome the other!";
    }
}

// factory function
function makeWarrior(name,gender) {
    return {
        name: name,
        gender: gender,
        level: 1,
        weapon: "wooden sword",
        power: randomIntFromInterval(1,100),
        fight: fight,
        faceoff: faceoff,
        isDefeated: "no",
        hasFoughtInCurrentRound: "no"
        
    };
}
var warriors = [
    makeWarrior("Mikaila","F"),
    makeWarrior("Hamiltoniun","M"),
    makeWarrior("Jordainof","M"),
    makeWarrior("Helena","F"),
    makeWarrior("Ulaizio","M"),
    makeWarrior("Avivorgoff","M"),
    makeWarrior("Natalia","F"),
    makeWarrior("Kaylum","M"),
    makeWarrior("Cyprianna","F"),
    makeWarrior("Normang","M"),
    makeWarrior("Dzjihadhalia","F"),
    makeWarrior("Christanoff","M"),
    makeWarrior("Loga","F"),
    makeWarrior("Mathiild","F"),
    makeWarrior("Durk","M"),
    makeWarrior("Beatrixx","F"),
];



//randomly select two fighters
function chooseTwoWarriors(){
    var war1 = warriors[randomIntFromInterval(0,15)]
        
    var war2;
}


var count = 16;
while (count != 1){
    
}