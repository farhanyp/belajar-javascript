// Style

const canvas = document.getElementById('canvas')
const buttons = document.querySelectorAll('input')

for(let button of buttons){
    button.onclick = function(){
        canvas.style.backgroundColor = button.getAttribute("value")
    }
}
