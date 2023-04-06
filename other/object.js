let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]

function findObject(objects,key,value){
    for (let obj of objects ){
        if(obj[key] == value){
            return obj
        }
    }
}    
    
let result = findObject(objects, 'name', 'Иван')
console.log(result)
      