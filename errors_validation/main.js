const form = document.getElementById('form-user');
const formError = document.getElementById('form-errors');
const spin = form.querySelector('button .spinner-border')

async function createUser(data){
    const errors = [];

    if(!data.email)
        errors.push({
            name: 'email',
            message: 'обязателен для заполнения'
        });
    else if (!data.email.includes('@') || !data.email.includes('.'))
        errors.push({
            name: 'email',
            message: 'неверный формат'
        });

    if(!data.name.trim())
        errors.push({
            name: 'name',
            message: 'обязательно для заполнения'
        });
    if(!data.gender)
        errors.push({
            name: 'gender',
            message: 'обязателен для заполнения'
        });    
    if(!data.status)
        errors.push({
            name: 'status',
            message: 'обязателен для заполнения'
        });   


    if (errors.length){
        const err = new TypeError();
        err.errorMessages = errors;
        throw err;
    }
    


    const response = await fetch('https://gorest.co.in/public/v2/users',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer dc3b3150ae69d37ebbc144b92369339c22a5006feb0900122853b9c7ea738b7a'
        },
    });
    const rez = await response.json();


    console.log(response.status)
    
    if (response.status === 200 ||response.status === 201){
        console.log(rez)
        return rez;
    }
    
    if (rez){
        console.log(rez)
        const err = new TypeError();
        err.errorMessages = rez.map(err => ({
            name: err.field,
            message: err.message
        }));
        throw err;
    }


}


form.addEventListener('submit', async e =>{
    e.preventDefault();
    const data = {};
    const inputs = {};


    for (let i = 0; i < form.elements.length; ++i){
        const input = form.elements[i];
        if (!input.name) continue;
        data[input.name] = input.value;
        inputs[input.name] = input;
        input.classList.remove('is-invalid');
    }

    formError.textContent = '';
    try{
        spin.style.display = '';
        await createUser(data);
        
    }catch(err){
        if (err.name !== 'TypeError') throw err;
        if (err.errorMessages){
            for (const errorMessage of err.errorMessages){
                inputs[errorMessage.name].classList.add('is-invalid');
            }
            formError.textContent = err.errorMessages.map(error => error.name +' '+ error.message)
        }
    }finally{
        spin.style.display = 'none';
    }


})