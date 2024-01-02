const miObservable = Rx.Observable.fromEvent(document, 'mousemove');
const notificador = Rx.Observable.timer(300);


miObservable
    .takeUntil(notificador)
    .finally(() => console.log('Fin'))
    .subscribe(data => console.log(data))