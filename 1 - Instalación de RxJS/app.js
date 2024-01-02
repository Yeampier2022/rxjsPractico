const clicks = Rx.Observable.fromEvent(document, 'click')
let contador = 0;

clicks.subscribe(click => {
    console.log(contador, click);
    contador++
    if (contador === 5) {
        console.log("LLegamos a 5");
    }
})

const myObservable = Rx.Observable.create(observer => {
    observer.next("Hola");
    observer.next("Mundo");

}
);

const button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click').subscribe(() => {
    myObservable.subscribe(val => {
        console.log(`  ${val} Estoy viendo el resultado a traves del bottom`);

    })
})