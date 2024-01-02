const miObservable = Rx.Observable.of('Hola mundo', ['Dato 1', 123], 23, 1994, {
    fav: 'star_selected'
})

miObservable
    .first()
    .subscribe(data => console.log('Primero: ', data))


miObservable
    .last()
    .subscribe(data => console.log('Último', data))