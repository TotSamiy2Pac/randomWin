const input = document.querySelector('#input')
const btnChek = document.querySelector('#btn')
const resultSpan = document.querySelector('#resultSpan')
const spanWin = document.querySelector('#spanWin')
const spanLose = document.querySelector('#spanLose')

let resultRandom = 0

const randomFunc = () => {
    resultRandom = Math.round(Math.random()*10)
    resultSpan.style.display = 'block'
    resultSpan.innerHTML = `Число рандома: ${resultRandom}`

    if (Number(input.value) === Number(resultRandom)){
        spanWin.style.display = 'block'
        spanLose.style.display = 'none'
    }
    else {
        spanLose.style.display = 'block'
        spanWin.style.display = 'none'
    }
}

btnChek.addEventListener('click', () => {
    randomFunc()
})