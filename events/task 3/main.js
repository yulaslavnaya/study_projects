document.addEventListener('DOMContentLoaded',function(){
    let btn = document.querySelector('.btn');


    window.addEventListener('scroll', () =>{
        console.log(window.pageYOffset);
        if (window.pageYOffset>100){
            btn.style.display = 'block';
        }else{
            btn.style.display = 'none'
        }

    }, { passive: true });

    btn.addEventListener('click', () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

            


});