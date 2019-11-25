const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 36
canvas.height = 36

//data structure
var matrix = Array(canvas.width).fill(0).map(x => Array(canvas.height).fill(0))

const fireColorsPalette = [
    [7, 7, 7],
    [31, 7, 7],
    [47, 15, 7],
    [71, 15, 7],
    [87, 23, 7],
    [103, 31, 7],
    [119, 31, 7],
    [143, 39, 7],
    [159, 47, 7],
    [175, 63, 7],
    [191, 71, 7],
    [199, 71, 7],
    [223, 79, 7],
    [223, 87, 7],
    [223, 87, 7],
    [215, 95, 7],
    [215, 95, 7],
    [215, 103, 15],
    [207, 111, 15],
    [207, 119, 15],
    [207, 127, 15],
    [207, 135, 23],
    [199, 135, 23],
    [199, 143, 23],
    [199, 151, 31],
    [191, 159, 31],
    [191, 159, 31],
    [191, 167, 39],
    [191, 167, 39],
    [191, 175, 47],
    [183, 175, 47],
    [183, 183, 47],
    [183, 183, 55],
    [207, 207, 111],
    [223, 223, 159],
    [239, 239, 199],
    [255, 255, 255]
]

//fire souce
for (let index = 0; index < canvas.width; index++) {
    matrix[index][35] = 36
}

setInterval(function(){

    for (let row = 0; row < canvas.width; row++) {
        for (let column = 0; column < canvas.height-1; column++) {
            const intensity = matrix[row][column]
            //debugger
            ctx.beginPath()
            ctx.fillStyle = 'rgb(' + fireColorsPalette[intensity] + ')'
            ctx.rect(row, column, 1, 1)
            ctx.fill()
            ctx.closePath()

            //atualizar a matrix
            const decay = Math.floor(Math.random() * 3)
            const newIntensity = matrix[row][column+1] - decay < 0 ? 0 : matrix[row][column+1] - decay
            matrix[row][column] = newIntensity
            
        }    
    }
}, 100)