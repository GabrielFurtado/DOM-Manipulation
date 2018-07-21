var p1button = document.querySelector ("#p1");
var p2button = document.querySelector ("#p2");
var max = document.querySelector ("#max");
var p1span = document.querySelector ("#p1score");
var p2span = document.querySelector ("#p2score");
var reset = document.querySelector ("#reset");
var span= document.querySelector ("#limit");
var p1score=0;
var p2score=0;
var isi=max.value;
p1button.addEventListener ("click", function(){
    if (p1score<max.value&&p2score<max.value){
        p1score++;
        p1span.textContent= p1score;
    }
    if (p1score==max.value){
        p1span.style.color= "yellow";
    }
});


p2button.addEventListener ("click", function(){
    if (p2score<max.value&&p1score<max.value){
        p2score++;
        p2span.textContent= p2score;
    }
    if (p2score==max.value){
        p2span.style.color= "yellow";
    }
});


reset.addEventListener ("click", function() {
    location.reload();
})

max.addEventListener("click", function(){
   span.textContent= max.value;
})