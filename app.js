// function reqListener () {
//     console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http://www.example.org/example.txt');
// oReq.send();

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
//     console.log('FIRST REQUEST WORKED!');
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0];
//     const filmRequest = new XMLHttpRequest();
//     filmRequest.addEventListener('load', function() {
//         console.log("SECOND REQUEST WORKED");
//         const filmData = JSON.parse(this.responseText);
//         console.log(filmData);
//     })
//     filmRequest.addEventListener('error', function(e) {
//         console.log('ERROR!', e);
//     })
//     filmRequest.open('GET', filmURL);
//     filmRequest.send();
//     // for (let planet of data.results) {
//     //     console.log(planet.name);
//     // }
// })
// firstReq.addEventListener('error', ()=>{
//     console.log("ERROR!");
// })
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request Sent');

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
//     console.log('FIRST REQUEST WORKED');
//     const data = JSON.parse(this.responseText);
//     const planetData = data.results[Math.floor(Math.random() * 10)];
//     console.log(planetData.name);
//     console.log("Films:");
//     for (let film of planetData.films) {
//         console.log(film);
//     }
//     const latestFilmUrl = planetData.films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function() {
//         const lateFilmData = JSON.parse(this.responseText);
//         console.log('LATEST FILM DATA:');
//         console.log(lateFilmData);
//     })
//     filmReq.addEventListener('error', (err) => {
//         console.log('ERROR', err);
//     })
//     filmReq.open('GET', latestFilmUrl);
//     filmReq.send();
//     console.log('FILM REQUEST SENT');
// });
// firstReq.addEventListener('error', (err) => {
//     console.log('ERROR', err);
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log("REQUEST SENT");

// const randoPlanet = Math.floor(Math.random() * 10);


/* Refactored with fetch() */

// const checkStatusAndParse = (response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//         return response.json();
// };

// const printPlanets = (data) => {
//     console.log('Loaded 10 more planets...');
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     // const p = new Promise((resolve, reject) => {
//     //     resolve(data);
//     // })
//     // return p;
//     return Promise.resolve(data.next);
// }

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//     return fetch(url);
// }

// fetchNextPlanets()
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log('SOMETHING WENT WRONG WITH FETCH');
//         console.log(err);
//     });


/* refactored with Axios Library */

const getPlanets = (url = 'https://swapi.dev/api/planets/') => {
    console.log(url);
    return axios.get(url);
}

const printPlanets = (({ data }) => {
    console.log('Printing 10 Planets...');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
})

getPlanets()
.then(printPlanets)
.then(getPlanets)
.then(printPlanets)
.then(getPlanets)
.then(printPlanets)
.catch((err) => {
    console.log(`Error code: ${err}`);
})
