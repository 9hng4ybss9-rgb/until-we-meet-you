// 🔧 TEST MODE: unlock everything for now
const TEST_MODE = true;

function scrollToContent() {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth"
  });
}

function giveChocolate() {
  const choco = document.getElementById("chocolate");
  const text = document.getElementById("choco-text");

  choco.classList.add("move-chocolate");
  text.style.display = "block";
}
