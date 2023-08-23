const navAboveAll = document.getElementById("navWrapper");
const menuBurguer = document.getElementById("burguerMenu");

const animationToRight = "navWAnimationToRight";
const animationToLeft = "navWAnimationToLeft";

function rodaMenu() {
  function hideMenu() {
    navAboveAll.style.display = "none";
  }
  if (navAboveAll.style.display == "none") {
    menuBurguer.textContent = "close";
    navAboveAll.classList.remove(animationToRight);
    navAboveAll.classList.add(animationToLeft);
    navAboveAll.style.display = "flex";
  } else {
    menuBurguer.textContent = "menu";
    navAboveAll.classList.remove(animationToLeft);
    navAboveAll.classList.add(animationToRight);
    setTimeout(hideMenu, 500);
  }
}
menuBurguer.addEventListener("click", rodaMenu);

const buttonShow = document.getElementById("showModal");
const buttonClose = document.getElementById("closeModal")
const modal = document.getElementById("modal");

buttonShow.addEventListener("click", () => {
  modal.showModal();
})
buttonClose.addEventListener("mouseover", () => {
  buttonClose.style.cursor = "pointer";
})
buttonClose.addEventListener("click", () => {
  modal.close();
})