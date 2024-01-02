const buton = document.querySelector("button")

buton.disabled = true

const timer = Rx.Observable.timer(3000)

timer.subscribe(done => {
    buton.disabled = false
    console.log(`El boton se ha habilitado nuevamente`);
})