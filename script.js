function giveChocolate(event) {
  event.stopPropagation();

  const choco = document.getElementById("chocolate");
  const text = document.getElementById("choco-text");

  choco.classList.remove("move-chocolate");
  void choco.offsetWidth;
  choco.classList.add("move-chocolate");

  text.style.display = "block";
}

function giveTeddy(event) {
  event.stopPropagation();

  const teddy = document.getElementById("teddy");
  const text = document.getElementById("teddy-text");

  teddy.classList.remove("teddy-pop");
  void teddy.offsetWidth;
  teddy.classList.add("teddy-pop");

  text.style.display = "block";
}
