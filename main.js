let stopWatch;
let startButton;
let stopButton;
let resetButton;

let timer;
let startTime;
let elapsedTime = 0;
let holdTime = 0;

window.onload = function () {
    stopWatch = document.getElementById('stop_watch');
    startButton = document.getElementById('start-button');
    stopButton = document.getElementById('stop-button');
    resetButton = document.getElementById('reset-button');
}



function start(){
    startTime = Date.now();
    
    measureTime();
    
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stop (){
    clearInterval(timer);
    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset (){
    clearInterval(timer);

    elapsedTime = 0;
    holdTime = 0;
    stopWatch.textContent = "00:00.000";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function measureTime() {
    timer = setTimeout(function () {
        elapsedTime = Date.now() - startTime + holdTime;
        stopWatch.textContent = new Date(elapsedTime).toISOString().slice(14, 23);
        
       
        measureTime();
    }, 10);
}