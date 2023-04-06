const cssPromises = {};

function loadResourses(src){
    if (src.endsWith('.js')){
        return import(src);
    }
    if (src.endsWith('.css')){
        if (!cssPromises[src]){
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = src;
            cssPromises[src] = new Promise(resolve =>{
                link.addEventListener('load', () => resolve());
            });
            document.head.append(link);
        }
        return cssPromises[src];
    }

    return fetch(src).then(res => res.json());
}

const appContainer = document.getElementById('app');
const searchParams = new URLSearchParams(location.search);

const productId = searchParams.get('episode_id')


async function renderPage(moduleName, apiUrl, css){
    console.log(productId)
    const [pageModule, data] = await Promise.all(
        [moduleName, apiUrl, css].map(src => loadResourses(src))
    );
    console.log(data)
    appContainer.innerHTML ='';
    appContainer.append(await pageModule.render(data));
}


console.log(loadResourses(`https://swapi.dev/api/films`, '1'));


if (!productId){
    renderPage(
    './menu.js',
    'https://swapi.dev/api/films',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css')
}else{
    renderPage(
        './episode.js',
        `https://swapi.dev/api/films/${productId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css')
}
