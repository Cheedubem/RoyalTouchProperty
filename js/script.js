const toggleButton = document.getElementsByClassName("nav-menu")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];

toggleButton.addEventListener("click", () => {
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
  }
});
