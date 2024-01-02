const promesa = new Promise((resolve, reject) => {
    fetch('https://api-mi-liga.now.sh/api/jugadores')
        .then(data => resolve(data.json()))
        .catch(error => {
            reject(error)
        })
});

const obsvPromise = Rx.Observable.fromPromise(promesa)

obsvPromise
    .map(jugadores => {
        console.log('Antes de la suscripción: ', jugadores);
        let estado = jugadores.every(jugador => jugador.edad >= 20);
        jugadores = jugadores.filter(jugador => jugador.edad >= 20)

        return {
            estado,
            jugadores
        };
    })
    .subscribe(
        data => {
            console.log('Después de la suscripción', data);
            if (data.estado) {
                console.log('Equipo aceptado');
            } else {
                console.log('Equipo rechazado');
            }
        },
        error => {
            console.log(error);
        })