const observablePaises = Rx.Observable.of('Perú', 'Venezuela', 'México', 'Colombia');
const observableComida = Rx.Observable.of('Ceviche', 'Arepa', 'Tacos', 'Bandeja paisa');

const miObservable = Rx.Observable.zip(observablePaises, observableComida);


miObservable.subscribe(platillos => {
    console.log(platillos)
})