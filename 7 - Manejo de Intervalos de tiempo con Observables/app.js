const boton = document.querySelector('button');

boton.disabled = true;

const intervalo = Rx.Observable.interval(2000);

intervalo.subscribe(i => {
    boton.disabled = boton.disabled ? false : true;
    console.log(i);
})