const btn = document.querySelector(".cta");
const svgLogo1 = document.getElementById("svgTop");
const svgLogo2 = document.getElementById("svgbottom");

// document.addEventListener("mousemove", e => {
//   cursorr.setAttribute(
//     "style",
//     "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
//   );
// });

// cursorr.addEventListener("click", () => {
//   cursorr.classList.add("animationCursor");
//   setTimeout(() => {
//     cursorr.classList.remove("animationCursor");
//   }, 500);
// });

svgLogo1.addEventListener("mousedown", () => {
  svgLogo1.classList.add("svgAnime");
  svgLogo2.classList.add("svgAnimed");
  btn.classList.remove("disNone");

  setTimeout(() => {
    anime({
      targets: ".cta",
      translateY: 1,
      opacity: 1,
      easing: "easeInOutExpo",
      duration: 1000,
    });
  }, 100);
});

btn.addEventListener("click", () => {
  anime({
    targets: ".cta",
    translateX: 2,
    opacity: 0,
    duration: 200,
  });

  anime({
    targets: ".svgTop",
    translateX: -8,
    easing: "easeInOutSine",
    duration: 200,
    opacity: 0,
  });

  anime({
    targets: ".svgbottom",
    translateX: 5,
    easing: "easeInOutSine",
    duration: 500,
    opacity: 0,
  });

  setTimeout(() => {
    btn.classList.add("disNone");
    svgLogo1.classList.add("disNone");
    svgLogo2.classList.add("disNone");
  }, 1000);
});

// svgLogo1.addEventListener("mouseleave", () => {
//   svgLogo1.classList.remove("svgAnime");
// });
