function scrollToContent() {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth"
  });
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const sections = document.querySelectorAll(".day");

sections.forEach(section => {
  const unlockDate = new Date(section.dataset.date);
  unlockDate.setHours(0, 0, 0, 0);

  if (today < unlockDate) {
    section.classList.add("locked");
  } else {
    section.classList.remove("locked");
  }
});
