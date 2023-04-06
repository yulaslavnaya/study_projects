document.addEventListener('DOMContentLoaded',function(){
    const input1 = document.querySelector('.js-text1');
    const input2 = document.querySelector('.js-text2');
    const input3 = document.querySelector('.js-text3');
    const fullName = [input1, input2, input3];
    const dict = "абвгдеёжзиклмнопрстуфхцчщшъыьюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЮЯ -"
    const form = document.querySelector('.form');

    fullName.forEach(id => {
        id.addEventListener('keypress', event=>{
            if (!dict.includes(event.key)){
                event.preventDefault();
            }
        })

        id.addEventListener('blur', event =>{   
            let newValue =event.target.value.replace(/ +/g, ' ').trim();
            newValue = newValue.replace(/[^А-Яа-яё]/gi, '');
            id.value = newValue.substring(0,1).toUpperCase() + newValue.substring(1).toLowerCase();

        })
    })
    


    form.addEventListener('submit', event =>{
        event.preventDefault();
        let name = document.createElement('h2');
        name.classList.add('mb-5')
        name.textContent = `Ваше ФИО: ${event.target.elements[0].value} ${event.target.elements[1].value} ${event.target.elements[2].value}`
        form.append(name)
        event.target.elements[0].value = '';
        event.target.elements[1].value = '';
        event.target.elements[2].value = '';
    })

});