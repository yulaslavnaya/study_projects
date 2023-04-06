document.addEventListener('DOMContentLoaded',function(){
let digitInput = document.querySelector('.digit-input');
let startButton = document.querySelector('.start-button');
let countSeconds = document.querySelector('.count-seconds');
let seconds = 0;


function getsetValue(){
    clearInterval()
    seconds = parseInt(digitInput.value);
    setInterval(timer, 1000, clearInterval() );
    
}

function timer(){
    countSeconds.textContent = seconds;
    if (seconds>0){
        seconds = seconds - 1;
    }
}

startButton.addEventListener('click', getsetValue);


});