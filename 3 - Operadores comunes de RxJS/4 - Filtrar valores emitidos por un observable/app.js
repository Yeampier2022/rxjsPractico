const promesa = new Promise((resolve, reject) => {
    fetch('https://api-mi-liga.now.sh/api/jugadores')
        .then(data => resolve(data.json()))
        .catch(error => {
            reject(error)
        })
});

const miObservador = Rx.Observable.fromPromise(promesa)

miObservador
    .filter(jugadores => {
        return jugadores.length >= 8;
    })
    .subscribe(
        jugadores => {
            console.log('-->', jugadores);
        },
        error => {
            console.log(error);
        },
        () => {
            console.log('Fin');
        }
    )


const miObservable = Rx.Observable.of('Hola mundo', ['Dato 1', 123], 23, 1994, {
    fav: 'star_selected'
})


miObservable
    .filter(value => isNaN(value))
    .subscribe(val => console.log('Final: ', val))