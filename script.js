function scrollToContent() {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth"
  });
}

const today = new Date();
today.setHours(0, 0, 0, 0);

document.querySelectorAll(".day").forEach(section => {
  const unlockDate = section.dataset.date
    ? new Date(section.dataset.date)
    : null;

  if (!unlockDate) return;

  unlockDate.setHours(0, 0, 0, 0);

  if (today >= unlockDate) {
    section.classList.add("unlocked");
  }
});
