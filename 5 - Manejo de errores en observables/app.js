const promesa = new Promise((resolve, reject) => {

    fetch('http://httpstat.us/500')
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

miObservable
    .subscribe(
        resultados => {
            console.log('resultados', resultados);
        },
        error => {
            console.log('ERROR: ');
            throw error;
        }
    )