const avisos__game = document.querySelector(".avisos__game")

const box__game = document.querySelector(".box__game")

let escrita__user = document.querySelector(".escrita__user")

const BTN_enviar = document.querySelector(".enviar")
const BTN_iniciar = document.querySelector(".iniciar")

let vidas;
let numero__pergunta;


let perguntas = [
    "qual é o evento de clicar em um elemento?",
    "qual é o evento de segurar o mouse em um elemento?",
    "qual é o evento de entrar com o mouse em um elemento e ficar?",
    "qual é o evento de mover o mouse dentro de um elemento?",
    "qual é o evento de clicar com o mouse direito?",
    "qual é o evento de sair dentro de um elemento com o mouse?"
]


// =====================================================

BTN_iniciar.addEventListener('click', () =>{

    
    BTN_iniciar.style.display = "none"
    
    BTN_enviar.style.display = "block"
    escrita__user.style.display = "block"
    vidas = perguntas.length
    numero__pergunta = 0

    embaralharLista(perguntas);

    avisos__game.textContent = perguntas[numero__pergunta]
})

BTN_enviar.addEventListener("click", () =>{

        if(perguntas[numero__pergunta] === "qual é o evento de clicar em um elemento?"){
            if(escrita__user.value === "click"){
               acertou()
            }else{
                erro(escrita__user.value)
            }
        } else if(perguntas[numero__pergunta] == 'qual é o evento de segurar o mouse em um elemento?'){
            if(escrita__user.value == "mousedown"){
                acertou()
            }else{
                erro(escrita__user.value)
            }
        } else if(perguntas[numero__pergunta] == 'qual é o evento de entrar com o mouse em um elemento e ficar?'){
            if(escrita__user.value == "mouseenter"){
                acertou()
            }else{
                erro(escrita__user.value)
            }
        } else if(perguntas[numero__pergunta] == 'qual é o evento de mover o mouse dentro de um elemento?'){
            if(escrita__user.value == "mousemove"){
                acertou()
            }else{
                erro(escrita__user.value)
            }
        } else if(perguntas[numero__pergunta] == 'qual é o evento de clicar com o mouse direito?'){
            if(escrita__user.value == "mouseup"){
                acertou()
            }else{
                erro(escrita__user.value)
            }
        }else if(perguntas[numero__pergunta] == 'qual é o evento de sair dentro de um elemento com o mouse?'){
            if(escrita__user.value == "mouseout"){
                acertou()
            }else{
                erro(escrita__user.value)
            }
        }

        if(numero__pergunta == vidas){
            ganhou()
        }
     

})

function embaralharLista(lista) {
    for (let i = vidas - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function acertou(){
    avisos__game.innerHTML = "Acertou <br>"
    numero__pergunta++
    avisos__game.innerHTML += perguntas[numero__pergunta]
}

function erro(escrita__erro){
    avisos__game.innerHTML = `ERRO, não é "${escrita__erro}" `
    avisos__game.innerHTML += perguntas[numero__pergunta]
}

function ganhou(){
    avisos__game.innerHTML = "PARABENS, você acertou todas as perguntas"

    BTN_enviar.style.display = "none"
    BTN_iniciar.style.display = "block"

    escrita__user.style.display = "none"
}