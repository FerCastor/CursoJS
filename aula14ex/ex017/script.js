function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let txt = document.getElementById('txt')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let texto = document.createElement('label')
            texto.innerHTML = `Você digitou o número ${n}`
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`            
            tab.appendChild(item)
            c++
        }
    }
}