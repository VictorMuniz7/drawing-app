let color = "black";
let isDark = false
let toolSize = 1

document.getElementById('customized-color').addEventListener('input', ($event) => {
  color = $event.target.value
  document.querySelector('.other-color').style.borderColor = $event.target.value
})

document.querySelector('.clear').addEventListener('click', () => {
  clear()
  isDark ? background(0) : background(255)
})

document.querySelector('.change-background').addEventListener('click', () => {
  isDark = !isDark
  isDark ? (background(0), color = 'white') : (background(255), color='black')
})

let toolSizeInput = document.querySelector('.tool-size')
toolSizeInput.addEventListener('input', (el) => {
  let size = el.target.value
  if(size > 50){
    el.target.value = 50
    size = 50
  }
  if(size < 1){
    el.target.value = 1
    size = 1
  }
  
  toolSize = size
})

function setup() {
  let canvas = createCanvas(300, 300);
  rectMode(CENTER)
  canvas.parent('canvas')
  background(255)
} 


function draw() {
  if (mouseIsPressed) {
		stroke(color);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(toolSize)
    cursor('./assets/brush.png')
  }
}

function changeColor(newColor){
  color = newColor
}

function decreaseToolSize(){
  if(toolSizeInput.value > 1){
    toolSizeInput.value--
    toolSize--
  }
}

function increaseToolSize(){
  if(toolSizeInput.value < 50){
    toolSizeInput.value++
    toolSize++
  }
}

