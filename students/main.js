(()=>{

   


    function age(str){
        let year = str.slice(0,4);
        //let [date, month] =  str.match(/(\d+)/g);
        //--month;
        let now = new Date;
        let nowYear = now.getFullYear();
        //let nowMonth = now.getMonth();

        old = nowYear-year 
        return str + ' (' + old + ' лет)'
    }


    function studyYear(str){
        let startYear = str.slice(0,4);
        let now = new Date;
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth();
        let endYear = Number(startYear) + 4;

        let course = nowYear - startYear + (nowMonth > 9)
        return startYear + '-' + endYear + ' (' + course + ' курс)'
    }

    function columnSearch(value, data){
        value=value.toLowerCase();
        filterData = [];
        for (let i =0; i < data.length; i++){
            let fio = data[i].fio.toLowerCase();
            if (fio.includes(value)){
                filterData.push(data[i])
            }
        }
        return filterData
    }

    function buildTable(data) {
            let table = document.getElementById('mytable')
            table.innerHTML = ''
            for (let i = 0; i < data.length; ++i) {
                let fioObj = data[i].name + "\n" + data[i].surname + "\n" + data[i].lastname;
                let old = age(data[i].dateBirth)
                let studyYears = studyYear(data[i].dateStart)
                let row = `
                <tr>
                <td>${fioObj}</td>
                <td>${old}</td>
                <td>${studyYears}</td>
                <td>${data[i].faculty}</td>
                <tr/>
                `
                table.innerHTML += row
            }
        }
        

    document.addEventListener('DOMContentLoaded',function(){
        let button = document.querySelector('.btn');
        let inputName = document.getElementById('name')
        let inputSurname = document.getElementById('surname')
        let inputLastname = document.getElementById('lastname')
        let inputBirth = document.getElementById('date-birth')
        let inputDateStart = document.getElementById('date-start')
        let inputFaculty = document.getElementById('faculty')
        let filterName = document.querySelector('.filter-name')
        let filterBd = document.querySelector('.filter-bd')
        let filterStartYear = document.querySelector('.filter-start-year')
        let filterFaculty = document.querySelector('.filter-faculty')
        let nameContainer = document.getElementById('name-container');

        let students = [{
            name: 'яна',
            surname: 'смирнова',
            lastname: 'александровна',
            fio: 'яна смирнвоа александровна',
            dateBirth: '2003-06-10',
            dateStart: '2021-09-01',
            faculty: 'информатика'
        },{
            name: 'аня',
            surname: 'иванова',
            lastname: 'александрвона',
            fio: 'аня иванова александрвона',
            dateBirth: '1999-05-03',
            dateStart: '2019-09-02',
            faculty: 'гум'
        }]
        buildTable(students);

        let inputFio = document.getElementById('inputFio')

        inputFio.addEventListener('input', function(){
           buildTable(columnSearch( inputFio.value, students));
        })
        let invalid = document.createElement('div');
        invalid.classList.add('invalid-feedback')
        invalid.textContent = "*Это поле обязательно для заполнения"

        button.addEventListener('click', function(){
            if (!inputName.value.trim().length){
                inputName.classList.add('is-invalid')
                nameContainer.append(invalid)
            }else{

                invalid.remove();
                inputName.classList.remove('is-invalid')
                console.log(inputName)
            let student = {
                name: inputName.value,
                surname: inputSurname.value,
                lastname: inputLastname.value,
                fio: inputName.value + ' ' + inputSurname.value + ' ' + inputLastname.value,
                dateBirth: inputBirth.value,
                dateStart: inputDateStart.value,
                faculty: inputFaculty.value
            }
            students.push(student);
            buildTable(students);
            }
            
            
            
        })

        filterName.addEventListener('click' , function(){
            buildTable(students.sort((a, b) => a.fio > b.fio ? 1 : -1));
        })

        filterBd.addEventListener('click' , function(){
            buildTable(students.sort((a, b) => a.dateBirth > b.dateBirth ? 1 : -1));
        })

        filterStartYear.addEventListener('click' , function(){
            buildTable(students.sort((a, b) => a.dateStart > b.dateStart ? 1 : -1));
        })

        filterFaculty.addEventListener('click' , function(){
            buildTable(students.sort((a, b) => a.faculty > b.faculty ? 1 : -1));
        })



    });






})();
