const ilustracao1 = $("#imgApresentacao")

setTimeout(function(){
    $(".textoApresentacao").css("top", "0")
}, 400)

setInterval(function(){
    var posicao = $(window).scrollTop()
    if(posicao > 258)ilustracao1.css("left", "-50%")
    else setTimeout(function(){
        ilustracao1.css("left", "0%")
    }, 600) 
}, 100)