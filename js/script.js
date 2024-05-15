window.addEventListener("DOMContentLoaded", () => {
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
});
