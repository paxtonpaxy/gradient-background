let likeCounter = 50;
let dislikeCounter = 50;

// like and dislike functions
function like() {
  console.log('like');
  likeCounter++;
  document.querySelector('.like-counter').innerHTML = likeCounter;
}

function dislike() {
  console.log('dislike');
  dislikeCounter++;
  document.querySelector('.dislike-counter').innerHTML = dislikeCounter;
}

// style for the background color based on the counters