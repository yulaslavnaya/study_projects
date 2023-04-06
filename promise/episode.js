export async function render(data){

    console.log(data);

    const container = document.createElement('div');
    container.classList.add('container-sm');


    const backbutton = document.createElement('button');
    backbutton.textContent = "Вернуться назад";
    backbutton.classList.add('btn', 'btn-primary');
    backbutton.addEventListener('click', () => {
        history.back()
    })


    const title = document.createElement('h1');
    title.textContent = `${data.title}: : episode № ${data.episode_id}`;

    const description = document.createElement('p');
    description.textContent = data.opening_crawl;


    const planetsTitle = document.createElement('h1');
    planetsTitle.textContent = 'Planets';

    let listP = document.createElement('ul');
    listP.classList.add('list-group');
    for (let planetsApi of data.planets){
        let li = document.createElement('li');
        li.classList.add('list-group-item','list-group-item-action');

        const contentPlanets = await loadResourses(planetsApi);
        li.textContent = contentPlanets.name;

        console.log(contentPlanets)
        listP.append(li)
    }

    const speciesTitle = document.createElement('h1');
    speciesTitle.textContent = 'Species';
/*
    let listS = document.createElement('ul');
    listS.classList.add('list-group');
    for (let planetsApi of data.species){
        let li = document.createElement('li');
        li.classList.add('list-group-item','list-group-item-action');

        
        const contentPlanets = await loadResourses(planetsApi);
        li.textContent = contentPlanets.name;

        console.log(contentPlanets)
        listS.append(li)
    }
*/


    container.append(title);
    container.append(backbutton);
    container.append(description);
    container.append(planetsTitle);
    container.append(listP);
    container.append(speciesTitle);
    //container.append(listS);

    return container;

}

async function loadResourses(src){
    const res = await fetch(src);
    const data = await res.json();
    return data;
}