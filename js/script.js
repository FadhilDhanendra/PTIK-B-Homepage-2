function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });

    event.preventDefault(); // Ini akan mencegah perilaku bawaan
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleLeadersButton");
  const moreCards = document.querySelectorAll(".more-leaders-card");

  toggleButton.addEventListener("click", function () {
    const isHidden = moreCards[0].classList.contains("d-none");

    moreCards.forEach(card => {
      card.classList.toggle("d-none");
    });

    toggleButton.textContent = isHidden ? "Show Less" : "Show More";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleCreativeButton");
  const moreCards = document.querySelectorAll(".more-creative-card");

  toggleButton.addEventListener("click", function () {
    const isHidden = moreCards[0].classList.contains("d-none");

    moreCards.forEach(card => {
      card.classList.toggle("d-none");
    });

    toggleButton.textContent = isHidden ? "Show Less" : "Show More";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleAchievementButton");
  const moreCards = document.querySelectorAll(".more-achievement-card");

  toggleButton.addEventListener("click", function () {
    const isHidden = moreCards[0].classList.contains("d-none");

    moreCards.forEach(card => {
      card.classList.toggle("d-none");
    });

    toggleButton.textContent = isHidden ? "Show Less" : "Show More";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const flipImages = document.querySelectorAll(".card-flip-img");

  flipImages.forEach(img => {
    const img1 = img.getAttribute("data-img1");
    const img2 = img.getAttribute("data-img2");
    let showingImg1 = true;

    setInterval(() => {
      img.style.filter = "blur(5px)";

      setTimeout(() => {
        img.src = showingImg1 ? img2 : img1;
        img.style.filter = "blur(0)";
        showingImg1 = !showingImg1;
      }, 200);
    }, 4000);
  });
});

