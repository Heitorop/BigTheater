/** @format */
const humburger = document.getElementById("hamburger-menu");
const checkBo = document.getElementById("menu__toggle");
function check() {
  if (checkBo.checked) {
    humburger.style.left = 250 + "px";
    console.log("lol");
  } else {
    humburger.style.top = 42 + "px";
    humburger.style.left = 40 + "px";
  }
}
check();
checkBo.addEventListener("click", check);
