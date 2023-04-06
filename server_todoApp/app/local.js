export function getLocalTodoList(){
    let response =[];
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        response.push({key: localStorage.getItem(key)})
      }
    return response;
}


export  function createLocalTodoItem({owner = "Я",name}){
    localStorage.setItem(name, 'false');
    let response =[];
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        response.push({key: localStorage.getItem(key)})
      }
    return response;
}
