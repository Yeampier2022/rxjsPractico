const numeros = Rx.Observable.from([10, 100, 1000]);

numeros
    .map(numero => {
        console.log('Antes: ', numero);
        return numero * 5;
    })
    .subscribe(dato => {
        console.log('Después: ', dato)
    })

    // Este operador puede modificar el dato que reciba y al mostrarlo llega con el nuevo valor