let count = 1; //cria um contador//

//cria um temporizador
setInterval( function(){
    nextImage();
}, 4000)

//a cada 4 segundos no temporizador, ele adiciona +1 no contador, caso o contador passe de 5, ele volta ao numero 1
function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }
//essa função pega o slide atual e marca ele, para assim, automatizar a troca de imagens do slider
    document.getElementById("slide"+count).checked = true;

}