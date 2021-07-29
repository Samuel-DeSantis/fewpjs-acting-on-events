let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
const SPEED = 5;

console.log(dodger.style.bottom);
console.log(dodger.style.left);

function moveDodgerUp () {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    if (bottom < 360) {dodger.style.bottom = `${bottom + SPEED}px`;}
}

function moveDodgerDown () {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    if (bottom > 0) {dodger.style.bottom = `${bottom - SPEED}px`;}
}

function moveDodgerLeft () {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {dodger.style.left = `${left - SPEED}px`;}
}

function moveDodgerRight () {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360) {dodger.style.left = `${left + SPEED}px`;}
}

document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            moveDodgerUp();
            break;
        case 'ArrowDown':
            moveDodgerDown();
            break;
        case 'ArrowLeft':
            moveDodgerLeft();
            break;
        case 'ArrowRight':
            moveDodgerRight();
            break;
        default:
    }
  }); 