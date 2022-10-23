//Evento que vai chamar a função
window.addEventListener('load',carregar)

// Função com a programação do site, vai ser chamada com o evento "LOAD"
function carregar() { 

// Declaração de variaveis
let msg = document.getElementById('msg');
let foto = document.getElementById('foto');
let data = new Date();
let hora =  data.getHours();

// Mensagem teste 
// msg.innerHTML= `A hora atual é ${hora} horas. `

// Frase de bom dia na estrutura condicional 
if (hora > 6 && hora <= 12) {
    document.body.style.background = '#d8a973'
    msg.innerHTML = `A hora atual é ${hora} horas. <br> <strong>BOM DIA!!</strong>`
    foto.innerHTML = `<img src="imagens/imagensOtimizadas/manhãOtimizada.jpg" alt="foto do dia" style="border-radius: 150px;">`
    
// Frase de boa tarde na estrutura condicional 
} else if (hora > 12 && hora <= 18) {
    document.body.style.background = '#f87e0ca8'
    msg.innerHTML = `A hora atual é ${hora} horas. <br> <strong>BOA TARDE!!</strong>`
    foto.innerHTML = `<img src="imagens/imagensOtimizadas/tardeOtimizada.jpg" alt="foto do dia" style="border-radius: 150px;">`
    
// Frase de boa noite na estrutura condicional 
} else {
    document.body.style.background = '#010b17';
    msg.innerHTML = `A hora atual é ${hora} horas. <br> <strong>BOA NOITE!!</strong>`;
    foto.innerHTML = `<img src="imagens/imagensOtimizadas/noiteOtimizada.jpg" alt="foto do dia" style="border-radius: 150px;">`;
    
  }   

}


