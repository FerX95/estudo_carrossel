// idica a imagem que deve ser mostrada no carrossel
var slideIndex = 1;

// fazendo a chamada da função showSlides
showSlides(slideIndex);

// função que troca as imagens do carrossel
function plusSlides(index){
    showSlides(slideIndex += index);
}

// atualizar as dots do carrossel
function currentSlide(index){
    showSlides(slideIndex = index);
}

function showSlides(index){
    // acessa os elementos do HTML e guarda eles em listas
    let slides = document.getElementsByClassName("fade");
    let dots = document.getElementsByClassName("dot");
    // quando estiver na ultima imagem e vc clicar em avançar, ele vai para a imagem 1
    if(index > slides.length){
        slideIndex = 1;
    }
    // quando estiver na primeira imagem e vc clicar em voltar, ele vai para a imagem 3
    if(index < 1){
        slideIndex = slides.length;
    }
    // este for desativa todas as imagens do carrossel
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    // este for remove a classe active dos itens dot
    for(let i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
    }

    // ativa a primeira imagem do carrossel
    slides[slideIndex-1].style.display = "block";
    // muda o estilo da primeira dot do carrossel
    dots[slideIndex-1].className += " active";
}