
const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.lineWidth = 0

let lastX = 0
let lastY = 0
let isDrawing = false
let gettingBigger = true
let hue = 0

function draw(e) {
  if (!isDrawing) return
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  lastX = e.offsetX
  lastY = e.offsetY
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    gettingBigger = !gettingBigger
  }
  if (gettingBigger) {
      ctx.lineWidth++
  }
  else {
      ctx.lineWidth--
  }
  if (hue === 360) {
    hue = 0
  } 
  hue++
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)