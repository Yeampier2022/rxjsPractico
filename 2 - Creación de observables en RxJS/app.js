const miObservable = Rx.Observable.create(observer => {
    observer.next('Hola');
    observer.next('Mundo');
})

miObservable.subscribe(val => {
    console.log('Valor del primer observable: ', val);
})

// Observable: Un arreglo que se construye a lo largo del tiempo o del flujo/stream

// Subscription: Un cliclo que esta sucediendo mientras exista el flujo/stream

// Emit: Cuando un Observable arroja algún valor por que algo se suscribió a el.

// Operator: Función que altera la forma en como los Observables emiten valores