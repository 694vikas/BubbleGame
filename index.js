let score = 0;
let hitrn = Math.floor(Math.random() * 10);
let timer = 60;

function increaseScore() {
  score += 10;
  document.querySelector("#scores").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 400; i++) {
    const rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"><h2>${rn}</h2></div>`;
  }
  document.querySelector(".pbottom").innerHTML = clutter;
}

function runTime() {
  let timers = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(timers);
      document.querySelector(".pbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector(".pbottom").addEventListener("click", function (event) {
  const clickedNumber = Number(event.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTime();
makeBubble();
getNewHit();
