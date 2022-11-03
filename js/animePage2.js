let tl2 = anime.timeline({
  easing: "easeInOutSine",
  duration: 700,
});

tl2.add({
  targets: ".circlesWraper span",
  translateX: 4,
  duration: 1000,
  opacity: 1,
  delay: anime.stagger(190),
  easing: "easeInOutSine",
});

tl2.add({
  targets: ".circlesWraper span",
  delay: anime.stagger(50),
  width: "27rem",
  height: "27rem",
  duration: 1000,
});

////////////////////////////////////////////////
// Animation For btns Encrypt Or Decrypt

const btnEncrypt = document.querySelector(".btnEncrypt");
const btnDecrypt = document.querySelector(".btnDecrypt");

anime({
  targets: ".btnEncrypt",
  duration: 4000,
  borderRadius: ["100%", "50%"],
  opacity: 1,
  translateX: [0, 110],
  delay: 3000,
});

anime({
  targets: ".btnDecrypt",
  duration: 5000,
  borderRadius: ["100%", "50%"],
  opacity: 1,
  translateX: 410,
  delay: 3000,
});

btnEncrypt.addEventListener("click", () => {
  anime({
    targets: ".btnEncrypt",
    translateX: 110,
    translateY: 400,
    scale: 15,
    rotate: 380,
    borderRadius: ["50%", "25%"],
    duration: 1500,
    // direction: "alternate",
  });
});

btnDecrypt.addEventListener("click", () => {
  anime({
    targets: ".btnEncrypt",
    translateX: 110,
    translateY: -1,
    scale: 1,
    rotate: -360,
    borderRadius: ["25%", "25%"],
    duration: 1500,
    // direction: "alternate",
  });
});
