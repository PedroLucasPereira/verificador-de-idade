function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
            } else if (idade < 13) {
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade  < 60) {
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'senhor.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
            } else if (idade < 13) {
                img.setAttribute('src', 'criancaf.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher.jpg')
            } else {
                img.setAttribute('src', 'senhora.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}