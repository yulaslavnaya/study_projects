let Name = "ЮЛиЧ"
let surname = "слаВнаЯ"


let yesName=Name.substr(0,1).toUpperCase()+Name.substr(1).toLowerCase()
let yesSurname=surname.substr(0,1).toUpperCase()+surname.substr(1).toLowerCase()

if (Name === yesName){
    console.log('no edit name')
    console.log(yesName)
}else{
    console.log('edit name')
    console.log(yesName)
}

if (surname === yesSurname){
    console.log('no edit surname')
    console.log(yesSurname)
}else{
    console.log('edit surname')
    console.log(yesSurname)
}