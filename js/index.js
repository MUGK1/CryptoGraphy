const bgBtn = document.getElementById("spanbtn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  bgBtn.classList.add("activateAnimation");
  bgBtn.classList.remove("activateAnimationleft");
});

btn1.addEventListener("click", () => {
  bgBtn.classList.add("activateAnimationleft");
  bgBtn.classList.remove("activateAnimation");
});
