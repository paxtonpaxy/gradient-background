function randomColors() {
  let background = document.getElementsByClassName("background")[0];

  function getRandomColor() {
    return {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
  }

  let startColor = getRandomColor();
  let endColor = getRandomColor();
  let percentFade = Math.floor(Math.random() * 100);

  function rgbToCSS(color) {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }


  let middleColor = {
    red: Math.floor((endColor.red - startColor.red) * percentFade + startColor.red),
    green: Math.floor((endColor.green - startColor.green) * percentFade + startColor.green),
    blue: Math.floor((endColor.blue - startColor.blue) * percentFade + startColor.blue)
  };

  background.style.background = `linear-gradient(to right, ${rgbToCSS(startColor)}, ${rgbToCSS(middleColor)}, ${rgbToCSS(endColor)})`;
  // reset for the next animation
  background.style.animation = "none";
  background.offsetHeight;
  background.style.animation = "dynamicBackground 300ms";

  if (!document.getElementById("dynamicBackgroundStyle")) {
    let styleSheet = document.createElement("style");
    styleSheet.id = "dynamicBackgroundStyle";
    styleSheet.innerHTML = `
        @keyframes dynamicBackground {
            0% { opacity: 0%; }
            5% { opacity: 5%; }
            10% { opacity: 10%; }
            15% { opacity: 15%; }
            20% { opacity: 20%; }
            25% { opacity: 25%; }
            30% { opacity: 30%; }
            35% { opacity: 35%; }
            40% { opacity: 40%; }
            45% { opacity: 45%; }
            50% { opacity: 50%; }
            55% { opacity: 55%; }
            60% { opacity: 60%; }
            65% { opacity: 65%; }
            70% { opacity: 70%; }
            75% { opacity: 75%; }
            80% { opacity: 80%; }
            85% { opacity: 85%; }
            90% { opacity: 90%; }
            95% { opacity: 95%; }
            100% { opacity: 100%; }
        }
    `;
    document.head.appendChild(styleSheet);
  }
}

document.getElementById("changeColorButton").addEventListener("click", randomColors);
