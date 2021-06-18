const container = document.getElementById('container')
const colors = ['#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8', '#3A0CA3', '#3F37C9', '#4361EE', '#4895EF', '#4CC9F0']
const screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('start-btn')
const boxBtn = document.querySelectorAll('.box-btn')
const exitBtn = document.getElementById('exit-btn')

startBtn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

boxBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        getUserInput(e)
        screens[1].classList.add('up')
    })
});

exitBtn.addEventListener('click', () => {
    window.location.reload()
})

function getUserInput(e) {

    let squaresNum = e.target.value

    for (let i = 0; i < squaresNum; i++) {
        const square = document.createElement('div')
        square.classList.add('square')

        square.addEventListener('mouseover', () => setColor(square))
        square.addEventListener('mouseout', () => removeColor(square))

        container.appendChild(square)
    }
}


function setColor(e) {
    const color = getRandomColor()
    e.style.background = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}