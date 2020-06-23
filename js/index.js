const ilustracao1 = $("#imgApresentacao")
const menu = $(".hamburguer");
const mobile = $(".menuMobile");
const fechar = $(".close") 
const cards = $(".containerCards")
let mudarCor = $(".fa-moon");
const background = "background-color"
const corPreta = "black"
const corBranca = "white"
let largura, altura;

trocaCor();
$(".fa-font").click(()=>{
    $(".aumentaDiminui").toggle()
    alteraTamanho()
})

function alteraTamanho(){
    $(".fa-minus").click(()=>{
        $(".icons").css("font-size", parseFloat($(".icons").css("font-size"))-1)
        $(".menu li").css("font-size", parseFloat($(".menu li").css("font-size"))-1)
        $(".menuMobile li").css("font-size", parseFloat($(".menuMobile li").css("font-size"))-1)
        $(".textoApresentacao p, .textoApresentacao a").css("font-size", parseFloat($(".textoApresentacao p").css("font-size"))-1)
        $(".sobre h2, .habilidades h2").css("font-size", parseFloat($(".sobre h2").css("font-size"))-1)
        $(".sobre p").css("font-size", parseFloat($(".sobre p").css("font-size"))-1)
    })
    $(".fa-plus").click(()=>{
        $(".icons").css("font-size", parseFloat($(".icons").css("font-size"))+1)
        $(".menu li").css("font-size", parseFloat($(".menu li").css("font-size"))+1)
        $(".menuMobile li").css("font-size", parseFloat($(".menuMobile li").css("font-size"))+1)
        $(".textoApresentacao p, .textoApresentacao a").css("font-size", parseFloat($(".textoApresentacao p").css("font-size"))+1)
        $(".sobre h2, .habilidades h2").css("font-size", parseFloat($(".sobre h2").css("font-size"))+1)
        $(".sobre p").css("font-size", parseFloat($(".sobre p").css("font-size"))+1)
    })
}

function trocaCor(){
    mudarCor.click(()=>{
        mudarCor.removeClass("fa-moon")
        mudarCor.addClass("fa-sun")
        $("body").css({background:corPreta, "color":corBranca})
        $("header").css({background: corPreta, "box-shadow":"1px 1px 4px 1px rgba(255,255,255,0.3)"})
        $(".logo").attr("src", "imagens/logoBranco.png")
        $("li").css("color", corBranca)
        $(".menuMobile").css(background, corPreta)
        $(".card").css(background, corBranca)
        mudarCor = $(".fa-sun")
        mudarCor.click(()=>{
            mudarCor.removeClass("fa-sun")
            mudarCor.addClass("fa-moon")
            $("body").css({background:corBranca, "color":corPreta})
            $("header").css({background: corBranca,"box-shadow":"1px 1px 4px 1px rgba(0,0,0,0.1)"})
            $(".logo").attr("src", "imagens/logoPreta.png")
            $("li").css("color", corPreta)
            $('.menuMobile').css(background, "inherit")
            $(".card").css(background, "inherit")
            mudarCor = $(".fa-moon")
            trocaCor()
        })
    })
}

setInterval(() => {
    largura = $(window).width();
    altura = $(window).height();
    menu.click(function(){
        mobile.css({"width":largura,"height":altura})
        mobile.css({"top":"0%"})
    })
    fechar.click(function(){
        mobile.css({"top":"-700%"})
    })    
}, 700);

setTimeout(function(){
    $(".textoApresentacao").css("top", "0")
}, 400)

setInterval(function(){
    var posicao = $(window).scrollTop()
    if(posicao > 258)ilustracao1.css("left", "-50%")
    else setTimeout(function(){
        ilustracao1.css("left", "0%")
    }, 600) 
    if(posicao>330) cards.css({"left":"0%"})
    else cards.css("left", "-120%")
}, 600)