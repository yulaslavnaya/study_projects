export function render(data){
    /*<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */

    const container = document.createElement('div');
    container.classList.add('container-sm');

    const title = document.createElement('h2');
    title.textContent = "Главная страница";

    let list = document.createElement('div');
    list.classList.add('list-group');

    for ( const el of data.results){
        let li = document.createElement('a');
        li.classList.add('list-group-item','list-group-item-action');
        li.textContent = `${el.title}: episode № ${el.episode_id} `;
        li.href =`?episode_id=${el.episode_id}`;
        li.addEventListener('click', ()=>{
            preventDefault();
            history.pushState(null, `?episode_id=${el.episode_id}`);
        })
        //console.log(el)
        list.append(li)
    }

    container.append(title);
    container.append(list);

    return(container);

}