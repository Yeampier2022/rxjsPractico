const boton = document.querySelector('button');

boton.disabled = true;

const timer = Rx.Observable.timer(3000);

timer.subscribe(done => {
    boton.disabled = false;
    console.log('El botón se ha habilitado nuevamente')
})