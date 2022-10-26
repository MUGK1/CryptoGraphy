const cursor = document.getElementById("cursor");
const topLogo = document.getElementById("logo1");
const botomLogo = document.getElementById("logo2");

let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});

tl.add({
  targets: ".secbg .bg",
  width: "100%",
  backgroundColor: "rgb(92, 86, 86)",
  delay: anime.stagger(100),
});

tl.add({
  targets: ".secbg .bg",
  width: "90%",
  backgroundColor: "rgba(119, 111, 111, 0.808)",
});

tl.add({
  targets: ".secbg .bg",
  delay: 300,
  rotate: "40deg",
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
