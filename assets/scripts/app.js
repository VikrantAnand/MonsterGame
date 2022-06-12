const attackEl = document.getElementById('attack-btn');
const strongEl = document.getElementById('strong-attack-btn');
const healEl = document.getElementById('heal-btn');
const logEl = document.getElementById('log-btn');
const mhEl = document.getElementById('monster-health');
const phEl = document.getElementById('player-health');

var playerHealth = 100;
var monsterHealth = 100;
var mAttackValue;
var pAttackValue;
var pStrongAttackValue;
var healing = 0;
var healed = 0;
var logArr = [];
var logObj = {};

function attack(){
    mAttackValue = Math.floor(Math.random()*20);
    pAttackValue = Math.floor(Math.random()*10);
    changeHealth(mAttackValue,pAttackValue);
}
function changeHealth(m,p){
    let mav=m,pav=p;
    playerHealth -= mav;
    monsterHealth -= pav;
    if(playerHealth<=0){
        alert("Game over you lost !!");
        restartGame();
    }else{
        phEl.value = playerHealth;
    }
    if(monsterHealth<=0){
        alert("Congrats you have defeated the monster !!");
        restartGame();
    }else{
        mhEl.value = monsterHealth;
    }
    logObj = {
        playerA:p,
        monsterA:m,
        playerH:playerHealth,
        monsterH:monsterHealth
    }
    saveToLog();
}
function restartGame(){
    healed = 0;
    healing = 0;
    playerHealth = 100;
    monsterHealth = 100;
    phEl.value = playerHealth;
    mhEl.value = monsterHealth;
}
function strongAttack(){
    mAttackValue = Math.floor(Math.random()*10);
    pAttackValue = Math.floor(Math.random()*30);
    changeHealth(mAttackValue,pAttackValue);
}
function heal(){
    if(healed<=40){
        healing = Math.floor(Math.random()*20);
        healed += healing;
        playerHealth += healing;
        phEl.value += healing;
    }
    else{
        alert('Healing limit reached');
    }
}
function saveToLog(){
    logArr.push(logObj);
}
function displayLog(){
    console.log(logArr);
}
attackEl.addEventListener('click',attack);
strongEl.addEventListener('click',strongAttack);
healEl.addEventListener('click',heal);
logEl.addEventListener('click',displayLog);
