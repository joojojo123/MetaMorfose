let count = 1; 


setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("slide"+count).checked = true;

}