const cursorr = document.getElementById("cursorr");

document.addEventListener("mousemove", e => {
  cursorr.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
  );
});

cursorr.addEventListener("click", () => {
  cursorr.classList.add("animationCursor");
  setTimeout(() => {
    cursorr.classList.remove("animationCursor");
  }, 500);
});
