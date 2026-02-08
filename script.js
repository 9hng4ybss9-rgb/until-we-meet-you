// 🔧 TOGGLE THIS FOR TESTING
const TEST_MODE = true; // true = unlock all days, false = date-based

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

  if (TEST_MODE) {
    // 🔓 UNLOCK EVERYTHING
    section.classList.add("unlocked");
    return;
  }

  if (!unlockDate) return;

  unlockDate.setHours(0, 0, 0, 0);

  if (today >= unlockDate) {
    section.classList.add("unlocked");
  }
});
