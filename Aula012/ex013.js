var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${hora} horas!`)
if(hora< 12){
    console.log('Bom dia!')
} else if (hora <= 12 && hora > 17){
    console.log('Boa tarde!')
}else if(hora > 17){
    console.log('Boa Noite!')
}