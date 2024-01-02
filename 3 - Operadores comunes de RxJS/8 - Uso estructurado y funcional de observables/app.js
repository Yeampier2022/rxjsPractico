throttle()
    .subscribe(valor => {
        print('#t-output', valor)
    })

debounce()
    .subscribe(valor =>
        print('#d-output', valor)
    );

// Throttle
function throttle() {
    var tInput = document.querySelector('#t-field');
    const thObservable = Rx.Observable.fromEvent(tInput, 'input')

    return thObservable
        .throttleTime(1000)
        .map(data => data.target.value)
}

// Debounce
function debounce() {
    var dInput = document.querySelector('#d-field');
    var deObservable = Rx.Observable.fromEvent(dInput, 'input');

    return deObservable
        .debounceTime(2000)
        .map(event => event.target.value)
}


const print = (elemento, valor) => {
    if (!valor) return;
    var etiqueta = document.createElement('pre');
    etiqueta.innerHTML = valor;
    document.querySelector(elemento).appendChild(etiqueta);
}