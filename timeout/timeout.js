document.addEventListener('DOMContentLoaded',function(){
let inputCase = document.createElement('input');
let h2 = document.createElement('h2');

let result = "";
document.body.append(inputCase, h2);


function symbolInput() {
    clearTimeout()
    setTimeout(digit,3000);
}

function digit() {
    h2.textContent = inputCase.value;
}


inputCase.addEventListener('input', symbolInput);


  });