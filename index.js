let prevbutton = document.querySelector('#prev')
let nextbutton = document.querySelector('#next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicador = document.querySelector('.indicadores')
let dots = indicador.querySelectorAll('ul li')

let active = 0
let active2 = 0
let firstPosition = 0
let lastPosition = itens.length - 1

nextbutton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')


    // Verifica a quantidade de itens
    active = active + 1 > lastPosition ? 0 : active + 1

    // Adiciona a quantidade de itens, dando o valor de active aos itens / [0, 1]
    itens[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.number').innerHTML = '0' + (active + 1)
}

prevbutton.onclick = () => {

    let itemOld = container.querySelector('.list .item.active')

    active2 = active2 - 1 < firstPosition ? lastPosition : active - 1

    itemOld.classList.remove('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active2].classList.add('active')

    // Verifica a quantidade de itens
    active = active - 1 < firstPosition ? lastPosition : active - 1

    // Adiciona a quantidade de itens, dando o valor de active aos itens / [0, 1]
    itens[active].classList.add('active')
    indicador.querySelector('.number').innerHTML = '0' + (active2 + 1)
    
}