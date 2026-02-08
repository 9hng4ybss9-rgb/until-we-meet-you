function giveChocolate(e) {
  e.stopPropagation();
  const c = document.getElementById("chocolate");
  c.classList.remove("move-chocolate");
  void c.offsetWidth;
  c.classList.add("move-chocolate");
  document.getElementById("chocoText").style.display = "block";
}

function giveTeddy(e) {
  e.stopPropagation();
  const t = document.getElementById("teddy");
  t.classList.remove("teddy-bounce");
  void t.offsetWidth;
  t.classList.add("teddy-bounce");
  document.getElementById("teddyText").style.display = "block";
}

const promises = [
  "I’ll listen.",
  "I’ll learn.",
  "I’ll stay."
];
let pIndex = 0;

function nextPromise(e) {
  e.stopPropagation();
  if (pIndex < promises.length) {
    document.getElementById("promiseText").innerText += promises[pIndex++] + " ";
  }
}

function hug(e) {
  e.stopPropagation();
  document.getElementById("hugHim").classList.add("hug-left");
  document.getElementById("hugHer").classList.add("hug-right");
}

function anniversary(e) {
  e.stopPropagation();
  document.getElementById("annivText").style.display = "block";
}
