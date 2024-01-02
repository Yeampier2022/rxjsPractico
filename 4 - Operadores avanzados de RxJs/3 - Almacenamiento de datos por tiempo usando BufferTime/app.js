var tInput = document.querySelector('#b-field');
var bObservable = Rx.Observable.fromEvent(tInput, 'input');



bObservable
    .map(data => data.target.value)
    .bufferTime(3000)
    .subscribe(valor => {
        console.log(valor)

        if (valor.length == 0) {
            valor = 'Sin dato...'
        }

        print('#b-output', valor)
    })





const print = (el, valor) => {
    if (!valor) return;
    var etiqueta = document.createElement('pre');
    etiqueta.innerHTML = valor;
    document.querySelector(el).appendChild(etiqueta);
}