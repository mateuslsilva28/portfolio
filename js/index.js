const ilustracao1 = $("#imgApresentacao")
const menu = $(".hamburguer");
const mobile = $(".menuMobile");
const fechar = $(".close") 
const cards = $(".containerCards")
let largura, altura;

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
    console.log(posicao)
    if(posicao > 258)ilustracao1.css("left", "-50%")
    else setTimeout(function(){
        ilustracao1.css("left", "0%")
    }, 600) 
    if(posicao>330) cards.css({"left":"0%"})
    else cards.css("left", "-100%")
}, 600)







