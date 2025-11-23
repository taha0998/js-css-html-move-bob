const bob = document.querySelector(".bob");
const eyes = document.querySelector(".bob .eye-container");
let left = 100;

function moveRight() {
  left += 100;
  bob.style.left = left + "px";
  eyes.style.transform = "rotate(0deg)";
  eyes.style.left = 48 + "px";
}
function moveLeft() {
  left -= 100;
  bob.style.left = left + "px";
  eyes.style.transform = "rotate(180deg)";
  eyes.style.left = -48 + "px";
}

function moveBob(k) {
  if (k.key == "ArrowRight") moveRight();
  if (k.key == "ArrowLeft") moveLeft();
}

let x = 100;
let y = 100;

document.addEventListener("keydown", moveBob);
