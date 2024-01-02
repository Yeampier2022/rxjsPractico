// Throttle
var tInput = document.querySelector('#t-field');
const thObservable = Rx.Observable.fromEvent(tInput, 'input')

thObservable
    .throttleTime(1000)
    .map(data => data.target.value)
    .subscribe(valor => {
        print('#t-output', valor)
    })


// Debounce
var dInput = document.querySelector('#d-field');
var deObservable = Rx.Observable.fromEvent(dInput, 'input');

deObservable
    .debounceTime(2000)
    .map(event => event.target.value).subscribe(valor =>
        print('#d-output', valor)
    );



const print = (elemento, valor) => {
    if (!valor) return;
    var etiqueta = document.createElement('pre');
    etiqueta.innerHTML = valor;
    document.querySelector(elemento).appendChild(etiqueta);
}