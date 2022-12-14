$(document).ready(function(){

    let slideAtual = 1
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 2000);

    function mudarSlide(){
        //1° etapa: remover o slide anterior
        if(slideAtual > 0){
            $("#carrossel").removeClass(listaSlides[slideAtual -1])
        }
        else{
            $("#carrossel").removeClass(listaSlides[listaSlides.length -1])
        }

        //2° etapa: exibir o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual])

        //3° etapa: indicar qual o slide atual
        console.log("Slide atual é: ",slideAtual)
        slideAtual ++

        if (slideAtual > listaSlides.length -1) {
            slideAtual = 0
        }
    }




    $("#barras").click(function(){
        if($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        }
        else{
            $("#menu").addClass("menu-ativo")
        }
    })
})






function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value 
    alert(email)
}

function mostrarMenu($evento){
    //identificar o elemento do menu
    let menu = document.getElementById("menu")
    //mudar visualização do menu
    //if(menu.style.display == "none")
    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }

    event.preventDefault();
}
