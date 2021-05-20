function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom Dia!
    img.scr = "manhã.png"
    document.body.style.background = '#de934f'
} else if (hora >= 12 && hora < 18) {
    //Boa Tarde!
    img.scr = "tarde.img"
    document.body.style.background = '#aaa58f'
}else {
    //Boa Noite!
    img.scr = "noite.img"
    document.body.style.background = '#19181b'
}

}