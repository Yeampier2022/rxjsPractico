const promesa = new Promise((resolve, reject) => {
    fetch('https://api-mi-liga.now.sh/api/jugadores')
        .then(data => resolve(data.json()))
        .catch(error => {
            reject(error)
        })
});

const obsvPromise = Rx.Observable.fromPromise(promesa)

obsvPromise
    .do(jugadores => console.log(`Tienes ${jugadores.length} jugadores`))
    .map(jugadores => {
        // console.log('Antes de la suscripción: ', jugadores);
        let estado = jugadores.every(jugador => jugador.edad >= 30);
        jugadores = jugadores.filter(jugador => jugador.edad >= 30)

        return {
            estado,
            jugadores
        };
    })
    .do(data => console.log(`${data.jugadores.length} jugadores aprobados`))
    .subscribe(
        data => {
            // console.log('Después de la suscripción', data);
            if (data.estado) {
                console.log('Equipo aceptado');
            } else {
                console.log('Equipo rechazado');
            }
        },
        error => {
            console.log(error);
        })