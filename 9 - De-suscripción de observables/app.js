const boton = document.querySelector('button');

boton.disabled = true;

// const timer = Rx.Observable.timer(3000)

// timer.subscribe(done => {
//     boton.disabled = false;
//     console.log('El botón se ha habilitado nuevamente')
// })


const intervalo = Rx.Observable.interval(2000);

const data = intervalo.subscribe(i => {
    boton.disabled = boton.disabled ? false : true;
    console.log(i);
})

Rx.Observable.fromEvent(boton, 'click')
    .subscribe(() => {
        console.log('onClick: ', 'Se ha pulsado el botón')
        data.unsubscribe()
    });

// const clicks = Rx.Observable.fromEvent(document, 'click')

// let cont = 0;
// const datos = clicks.subscribe(click => {
//     console.log(cont, click);
//     cont++;
//     if (cont == 5) {
//         // Acciones... 
//         datos.unsubscribe();
//     }
// })