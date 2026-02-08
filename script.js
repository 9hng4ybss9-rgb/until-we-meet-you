function giveChocolate(e) {
  e.stopPropagation();
  const c = document.getElementById("chocolate");
  c.classList.remove("move-chocolate");
  void c.offsetWidth;
  c.classList.add("move-chocolate");
  document.getElementById("choco-text").style.display = "block";
}

function giveTeddy(e) {
  e.stopPropagation();
  const t = document.getElementById("teddy");
  t.classList.remove("teddy-bounce");
  void t.offsetWidth;
  t.classList.add("teddy-bounce");
  document.getElementById("teddy-text").style.display = "block";
}

const promises = [
  "I’ll listen.",
  "I’ll learn.",
  "I’ll stay."
];
let promiseIndex = 0;

function nextPromise(e) {
  e.stopPropagation();
  if (promiseIndex < promises.length) {
    document.getElementById("promise").innerText += promises[promiseIndex++] + " ";
  }
}

function hug(e) {
  e.stopPropagation();
  document.getElementById("hug-him").classList.add("hug-close");
  document.getElementById("hug-her").classList.add("hug-close");
}

function anniversary(e) {
  e.stopPropagation();
  document.getElementById("anniv-text").style.display = "block";
}
