(function(){
    let block = document.querySelector('.js-block');
    let button = document.querySelector('.js-button');
    

    button.addEventListener('click', event =>{
        event._click = true;
        block.style.display = 'block';
    });
    

    block.addEventListener('click', event =>{
        event._click = true;
        block.style.display = 'block';
    });

    document.addEventListener('click',event =>{
        if (event._click) return;
        block.style.display = 'none';
    })

})();