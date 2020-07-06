const ilustracao1 = $("#imgApresentacao")
const menu = $(".hamburguer");
const mobile = $(".menuMobile");
const itensMobile = $(".menuMobile li")
const close = $(".close") 
const cards = $(".containerCards")
const projetos = $(".cardProjeto")
let sunMoon = $(".fa-moon");
const background = "background-color"
const blackColor = "black"
const whiteColor = "white"
let width, height;

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
        $(".sobre h2, .habilidades h2, .projetos h2").css("font-size", parseFloat($(".sobre h2").css("font-size"))-1)
        $(".sobre p, .areaText p, .card p").css("font-size", parseFloat($(".sobre p").css("font-size"))-1)})
    $(".fa-plus").click(()=>{
        $(".icons").css("font-size", parseFloat($(".icons").css("font-size"))+1)
        $(".menu li").css("font-size", parseFloat($(".menu li").css("font-size"))+1)
        $(".menuMobile li").css("font-size", parseFloat($(".menuMobile li").css("font-size"))+1)
        $(".textoApresentacao p, .textoApresentacao a").css("font-size", parseFloat($(".textoApresentacao p").css("font-size"))+1)
        $(".sobre h2, .habilidades h2, .projetos h2").css("font-size", parseFloat($(".sobre h2").css("font-size"))+1)
        $(".sobre p, .areaText p, .card p").css("font-size", parseFloat($(".sobre p").css("font-size"))+1)
    })
}
function trocaCor(){
    sunMoon.click(()=>{
        sunMoon.removeClass("fa-moon")
        sunMoon.addClass("fa-sun")
        $("body").css({background:blackColor, "color":whiteColor})
        $("header").css({background: blackColor, "box-shadow":"1px 1px 4px 1px rgba(255,255,255,0.3)"})
        $(".logo").attr("src", "imagens/logoBranco.webp")
        $("li").css("color", whiteColor)
        $(".menuMobile").css(background, blackColor)
        $(".cls-5, .cls-9").css("fill", "#6594f8")
        $(".cls-36").css("fill", whiteColor);
        $(".card").css(background, whiteColor)
        $(".card p, .jobMe p, .jobMe h2").css("color", blackColor)
        $(".footer1").css("background-image", "linear-gradient(rgb(0, 0, 0) 50%, rgb(37, 160, 217) 50%)")
        sunMoon = $(".fa-sun")
        sunMoon.click(()=>{
            sunMoon.removeClass("fa-sun")
            sunMoon.addClass("fa-moon")
            $("body").css({background:"#edf2f5", "color":blackColor})
            $("header").css({background: whiteColor,"box-shadow":"1px 1px 4px 1px rgba(0,0,0,0.1)"})
            $(".logo").attr("src", "imagens/logoPreta.webp")
            $("li").css("color", blackColor)
            $('.menuMobile').css(background, "inherit")
            $(".cls-5, .cls-9").css("fill", "#ffce44")
            $(".cls-36").css("fill", blackColor);
            $(".card").css(background, "inherit")
            $(".footer1").css("background-image", "linear-gradient(rgb(237, 242, 245) 50%, rgb(37, 160, 217) 50%)")
            sunMoon = $(".fa-moon")
            trocaCor()
        })
    })
}

setInterval(() => {
    const fecharMobile = ()=> mobile.css({"top":"-700%"})
    width = $(window).width();
    height = $(window).height();
    menu.click(function(){
        mobile.css({"width":width,"height":height})
        mobile.css({"top":"0%"})
    })
    itensMobile.click(()=>fecharMobile())
    close.click(()=>fecharMobile()) 
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