function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom Dia!
    img.scr = 'manha.png'
    document.body.style.background = '#de934f'
} else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    img.scr = 'tarde.png'
    document.body.style.background = '#aaa58f'
}else {
    //Boa Noite!
    img.scr = 'noite.png'
    document.body.style.background = '#19181b'
}

}