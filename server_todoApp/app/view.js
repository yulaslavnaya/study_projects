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
    
    function createTodoItemElement(todoItem, {onDone, onDelete}){
        const doneClass = 'list-group-item-success'
       
        let item = document.createElement('li');
    
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
    
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        if (todoItem.done){
            item.classList.add(doneClass);
        }
        item.textContent = todoItem.name;
    
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn','btn-success');
        doneButton.textContent = "Готово";
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.textContent = 'Удалить';
    
        doneButton.addEventListener('click',() => {
            onDone({todoItem, element: item})
            item.classList.toggle(doneClass, todoItem.done);
        });
        deleteButton.addEventListener('click',() => {
            onDelete({todoItem, element: item});
        });
    
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
    
        return item;
    }
    export let server = true;
    export let local = false;

    async function createTodoApp(container, {
        title, 
        owner,
        todoItemList = [],
        onCreateFormSubmit,
        onDeleteClick,
        onDoneClick
        }){

        

        let buttonServer = document.querySelector('.server');
        let buttonLocal = document.querySelector('.local');

        buttonServer.addEventListener('click', () =>{
            server= true;
            local=false;
            location.reload() 
            
        })

        buttonLocal.addEventListener('click', () =>{
            local=true;
            server=false;
            location.reload() 
        })



        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
    
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        const handlers = {onDelete: onDeleteClick, onDone: onDoneClick};
        
        todoItemList.forEach(element => {
            const todoItemElement = createTodoItemElement(element, handlers);
            todoList.append(todoItemElement);        
        });
    
        todoItemForm.form.addEventListener('input', function(){
            if (todoItemForm.input.value){
                todoItemForm.button.disabled=false;
            }else{
                todoItemForm.button.disabled=true;
            }
        })
    
        todoItemForm.form.addEventListener('submit', async function(e){
            e.preventDefault();
    
            if (!todoItemForm.input.value){
                return;
            }
           
            const todoItem = await onCreateFormSubmit({
                owner,
                name: todoItemForm.input.value
            });

            let todoItemElement = createTodoItemElement(todoItem, handlers);
     
            todoList.append(todoItemElement);
    
            todoItemForm.input.value = '';
            todoItemForm.button.disabled=true;
        });
    }

    export {createTodoApp};