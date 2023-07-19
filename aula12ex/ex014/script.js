
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var legenda = window.document.getElementById('legenda')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#f2c7a4'
        legenda.innerText = 'Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
        legenda.innerText = 'Boa tarde!'
    } else {
        // Boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
        legenda.innerText = 'Boa noite!'
    }
}