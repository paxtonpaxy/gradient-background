let likeCounter = 50;
let dislikeCounter = 50;

function randomBackgroundColor() {
  let background = document.getElementsByClassName("background")[0];

  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  background.style.backgroundColor = randomColor;
}

document
  .getElementById("changeColorButton")
  .addEventListener("click", randomBackgroundColor);
