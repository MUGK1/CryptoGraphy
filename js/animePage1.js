/////////////////////////////////////////////////////////////////
// First Page Animation and Variables

const cursor = document.getElementById("cursor");
const topLogo = document.getElementById("logo1");
const botomLogo = document.getElementById("logo2");
const bgMain = document.getElementById("bgMain");
const object1 = document.querySelector(".objectWrapper");
const object2 = document.querySelector(".objectWrapper2");
btn = document.querySelector(".cta");

let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});

tl.add({
  targets: ".secbg .bg",
  width: "100%",
  backgroundColor: "#1B1464", //"rgb(164, 134, 75)",
  delay: anime.stagger(100),
});

//rgb(92, 86, 86)

tl.add({
  targets: ".secbg .bg",
  width: "90%",
  backgroundColor: "rgba(27, 20, 100, 0.55)", //"rgba(164, 134, 75, 0.776)",
});

tl.add({
  targets: ".secbg .bg",
  delay: 200,
  rotate: "40deg",
  borderRadius: "10px",
});

btn.addEventListener("click", () => {
  let tl2 = anime.timeline({
    easing: "easeOutExpo",
    duration: 700,
  });
  tl2.add({
    targets: ".secbg .bg",
    rotate: "0deg",
    borderRadius: "0",
    width: "100%",
    backgroundColor: "#1B1464",
    delay: anime.stagger(110),
  });

  tl2.add({
    targets: ".secbg .bg",
    width: "0%",
    duration: 400,
  });

  anime({
    targets: ".object1",
    easing: "easeOutExpo",
    opacity: 0,
    duration: 800,
  });

  anime({
    targets: ".object2",
    easing: "easeOutExpo",
    opacity: 0,
    duration: 800,
  });

  setTimeout(() => {
    bgMain.classList.add("disNone");
    object1.classList.add("disNone");
    object2.classList.add("disNone");
  }, 2500);

  setTimeout(() => {
    document.getElementById("circles").classList.remove("disNone");
    document.getElementById("LoGo").classList.remove("disNone");
    document.getElementById("btnEnc").classList.remove("disNone");
    document.getElementById("btnDec").classList.remove("disNone");
  }, 2600);
});

/////////////////

anime({
  targets: ".svgTop",
  translateY: 6,
  dalay: 100,
  easing: "easeInOutExpo",
  opacity: 1,
  duration: 3000,
});

anime({
  targets: ".svgbottom",
  translateY: -4,
  dalay: 100,
  easing: "easeInOutExpo",
  opacity: 1,
  duration: 3000,
});

anime({
  targets: ".object1",
  easing: "easeInOutQuad",
  translateX: 2,
  duration: 1000,
  opacity: 1,
  delay: 4500,
});

anime({
  targets: ".object2",
  translateX: {
    value: "*=2.5", // 100px * 2.5 = '250px'
    duration: 1500,
  },
  width: {
    value: "-=18px", // 28 - 20 = '8px'
    duration: 1900,
    easing: "easeInOutSine",
  },
  rotate: {
    value: "+=3turn", // 0 + 2 = '2turn'
    duration: 1900,
    easing: "easeInOutSine",
  },
  direction: "alternate",
  easing: "easeInOutQuad",
  translateX: 2,
  duration: 1000,
  opacity: 1,
  delay: 4000,
  loop: true,
});

anime({
  targets: ".object3",
  opacity: 1,
  easing: "cubicBezier(.5, .05, .1, .3)",
  translateX: 2,
  duration: 6000,
  rotate: {
    if() {},
  },
  delay: 5000,
});

anime({
  targets: ".svgTop path",
  delay: function (el, i) {
    return i * 450;
  },
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  duration: 1700,
});

anime({
  targets: ".svgbottom path",
  delay: function (el, i) {
    return i * 500;
  },
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  duration: 1500,
});

/////////////////////////////////////////

let path = anime.path(".opjectPath path");
let path2 = anime.path(".opjectPath2 path");
let path3 = anime.path(".opjectPath3 path");

anime({
  targets: ".object1",
  translateX: path("x"),
  translateY: path("y"),
  easing: "easeInOutQuad",
  duration: 15000,
  //direction: "alternate",
  loop: true,
  rotate: "360deg",
  delay: 200,
});

anime({
  targets: ".object2",
  translateX: path2("x"),
  translateY: path2("y"),
  easing: "easeInOutQuad",
  duration: 5000,
  direction: "alternate",
  loop: true,
  delay: 200,
});

anime({
  targets: ".object3",
  translateX: path3("x"),
  translateY: path3("y"),
  easing: "easeInOutQuad",
  duration: 7000,
  direction: "alternate",
  loop: true,
  delay: 200,
});
//   translateX: path3("x"),
//   translateY: path3("y"),
//   easing: "easeInOutQuad",
//   duration: 7000,
//   direction: "alternate",
//   loop: true,
//   delay: 200,
