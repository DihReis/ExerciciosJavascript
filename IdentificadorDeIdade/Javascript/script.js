// Evento que vai chamar a função
let btn = document.querySelector('#validar')
btn.addEventListener('click', verificar)

// Função com todos os comando do site
function verificar() {

    // Declaração de variaveis
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.querySelector('#txtano');
    let valAno = Number(fAno.value)
    let res = document.querySelector('#resultado');
    let genero = ''
    let img = document.createElement('img') 
    img.setAttribute('id', 'foto')
    

    // Etrutura condicional 
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente'); // Mensagem de erro, caso os os dados não façam sentido.
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - valAno;
        // Condição para o sexo masculino
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                // criança
                img.setAttribute('src', 'imagensOtimizadas/meninoOtimizado.jpg' )
            } else if (idade >= 12 && idade < 20) {
                // jovem
                img.setAttribute('src', 'imagensOtimizadas/moçoJovemOtimizado.jpg' )
            } else if (idade >= 20 && idade < 40) {
                // Homem
                img.setAttribute('src', 'imagensOtimizadas/homemOtimizado.jpg' )  
            } else {
                // Idoso
                img.setAttribute('src', 'imagensOtimizadas/senhorOtimizado.jpg' )  
            }
            // Condição para o sexo feminino
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagensOtimizadas/meninaOtimizado.jpg' )  
            } else if (idade >= 10 && idade < 20) {
                // jovem
                img.setAttribute('src', 'imagensOtimizadas/moçaJovemOtimizado.jpg' )  
            } else if (idade >= 20 && idade < 40) {
                // Mulher
                img.setAttribute('src', 'imagensOtimizadas/mulherOtimizado.jpg' )  
            } else {
                // Idosa
                img.setAttribute('src', 'imagensOtimizadas/senhoraOtimizado.jpg' )  
            }  
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.style.textAlign = 'center'; 
        res.appendChild(img);
    } 




    
}