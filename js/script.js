window.addEventListener("DOMContentLoaded", () => {
  // Loader
  const loader = document.querySelector('.loading')

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none"
    }, 500);
  }, 2000);

  // Nav action
  const navToggle = document.querySelector(".nav-toggle");
  const headerNav = document.querySelector(".header__nav");

  navToggle.addEventListener("click", () => {
    if (navToggle.classList.contains("bi-list")) {
      navToggle.classList.remove("bi-list");
      navToggle.classList.add("bi-x");
      headerNav.classList.remove("h-0");
      headerNav.classList.add("h-32");
    } else {
      navToggle.classList.remove("bi-x");
      navToggle.classList.add("bi-list");
      headerNav.classList.remove("h-32");
      headerNav.classList.add("h-0");
    }
    console.log("Hello");
  });

  // appointment
  const appointmentBtn = document.querySelector("#appointment"),
    meetData = document.querySelector("#meeting"),
    submitData = document.querySelector("#submitData"),
    modal = document.querySelector(".modal");

  const closeModal = () => {
    modal.classList.remove("flex");
    modal.classList.add("hide");
  };

  appointmentBtn.addEventListener("click", () => {
    modal.classList.remove("hide");
    modal.classList.add("flex");
  });

  submitData.addEventListener("submit", (e) => {
    e.preventDefault();
    if (meetData.value === "") {
      alert("Please enter a date for the meeting.");
    } else if (new Date(meetData.value) - new Date() < 0) {
      alert("Please write the future tense");
    } else {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });
});
