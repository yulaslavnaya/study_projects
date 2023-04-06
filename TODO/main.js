(function(){
function createAppTitle(title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
}

function createTodoItemForm(){
    let form = document.createElement('form');
    let button = document.createElement('button');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled=true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
        form,input,button
    };
}

function createTodoList(){
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
}

function createTodoItem(name){
    let item = document.createElement('li');

    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;
    let content = {};
    content['name']=name;
    content['done']=false;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn','btn-success');
    doneButton.textContent = "Готово";
    deleteButton.classList.add('btn','btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return{
        item,deleteButton,doneButton,content
    }
}

function createTodoApp(container, title, itemList = []){
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    console.log(localStorage)
    

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    for (let i =0;i<localStorage.length;++i){
        let key = localStorage.key(i);
        let itemTodo = createTodoItem(JSON.parse(key))

        let doneStatus = localStorage.getItem(JSON.stringify(itemTodo.content['name']));
        console.log(doneStatus)
        if (doneStatus === 'true'){
            itemTodo.item.classList.add('list-group-item-success');
        }else{
            itemTodo.item.classList.remove('list-group-item-success');
        }

        itemTodo.doneButton.addEventListener('click',function(){
            if ( itemTodo.item.classList.contains('list-group-item-success')){
                itemTodo.item.classList.remove('list-group-item-success');
                localStorage.setItem(JSON.stringify(itemTodo.content['name']), 'false');
            }else{
                itemTodo.item.classList.add('list-group-item-success');
            localStorage.setItem(JSON.stringify(itemTodo.content['name']), 'true');
            }

        });
        itemTodo.deleteButton.addEventListener('click',function(){
            if (confirm('Вы уверенны?')){
                itemTodo.item.remove();
                localStorage.removeItem(JSON.stringify(itemTodo.content['name']))
            }
        });
        todoList.append(itemTodo.item);
    }


    todoItemForm.form.addEventListener('input', function(){
        if (todoItemForm.input.value){
            todoItemForm.button.disabled=false;
        }else{
            todoItemForm.button.disabled=true;
        }
    })

    todoItemForm.form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log(2)
        if (!todoItemForm.input.value){
            return;
        }
       
        let todoItem = createTodoItem(todoItemForm.input.value);
        
        localStorage.setItem(JSON.stringify(todoItem.content['name']),JSON.stringify(todoItem.content['done']))
        console.log(localStorage)

        todoItem.doneButton.addEventListener('click',function(){
            console.log(1)
            todoItem.item.classList.toggle('list-group-item-success');
            console.log(todoItem.content['name']);
            localStorage.setItem(JSON.stringify(todoItem.content['name']), 'true');
            
        });
        todoItem.deleteButton.addEventListener('click',function(){
            if (confirm('Вы уверенны?')){
                todoItem.item.remove();
            }
        });

        
        todoList.append(todoItem.item);
        todoItemForm.input.value = '';
        todoItemForm.button.disabled=true;
    });
}
window.createTodoApp=createTodoApp;
})();