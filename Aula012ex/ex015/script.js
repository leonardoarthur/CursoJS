function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique o ano.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'BBH.png')
            }else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'JH.png')
            }else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'H.png')
            }else if (idade > 50){
                //idoso
                img.setAttribute('src', 'IH.png')
            }
        } else{
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'BBM.png')
            }else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'JM.png')
            }else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'M.png')
            }else if (idade > 50){
                //idoso
                img.setAttribute('src', 'IM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}