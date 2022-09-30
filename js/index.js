const cores = ['#580469', '#990404', '#020c38']


document.getElementById('um').addEventListener('click', function(){
    document.body.style.background = cores[0]
})

document.getElementById('dois').addEventListener('click', function(){
    document.body.style.background = cores[1]
})

document.getElementById('tres').addEventListener('click', function(){
    document.body.style.background = cores[2]
})

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = 'Marcelo Elicker'
    }
}