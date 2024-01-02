const miObservable = Rx.Observable.of('Hola mundo', ['Dato 1', 123], 23, true, {
    fav: 'star_selected'
})

miObservable
    .takeWhile(value => {
        if (value != 23) {
            console.log('Condición cumplida: ', value)
            return value;
        }
    })
    .finally(() => console.log('Condición cumplida'))
    .subscribe(data => console.log(data))