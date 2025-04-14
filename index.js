//criar variaveis e obter itens do html
let contador = 0
let txtcontador = document.getElementById('txtcontador')
let txtmensagem = document.getElementById('txtmensagem')

//função para aumentar contador
function aumentar(){
    contador++
    txtcontador.innerHTML = contador
    mostrarMensagem()
}
function diminuir(){
    contador --
    txtcontador.innerHTML = contador
    mostrarMensagem()
}
function zerar(){
    contador =  0
    txtcontador.innerHTML = contador
    mostrarMensagem()
}
function aumentardois(){
    contador = contador + 2 
    txtcontador.innerHTML = contador
    mostrarMensagem()
}
function diminuirdois(){
    contador = contador - 2 
    txtcontador.innerHTML = contador
    mostrarMensagem()
}
function mostrarMensagem(){
    if(contador < 15){
        txtmensagem.innerHTML = 'pode entrar!'
    }else if (contador < 20){
        txtmensagem.innerHTML = 'Quase Lotado'
    }else {
         txtmensagem.innerHTML = 'Lotado'
    }
}