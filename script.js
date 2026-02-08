function giveChocolate(event) {
  // Prevent heart animation for this specific click
  event.stopPropagation();

  const choco = document.getElementById("chocolate");
  const text = document.getElementById("choco-text");

  // Reset animation for repeated clicks
  choco.classList.remove("move-chocolate");
  void choco.offsetWidth;

  choco.classList.add("move-chocolate");
  text.style.display = "block";
}
