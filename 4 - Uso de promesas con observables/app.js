const promesa = new Promise((resolve, reject) => {

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(data => data.json())
        .then(jugadores => {
            console.log('Promesa resuelta');
            resolve(jugadores)
        })
        .catch(error => {
            console.log('Promesa rechazada')
            reject(error)
        })
});

const miObservable = Rx.Observable.fromPromise(promesa);

miObservable.subscribe(resultados => {
    console.log('resultados', resultados);
})


const myObservable = Rx.Observable.fromPromise(promesa)

myObservable.subscribe(resultado => {
    console.log(`${resultado}`);
})