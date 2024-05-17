const textEl = document.querySelectorAll(".text");

window.addEventListener("scroll", () => {
  textEl.forEach((text) => {
    const rect = text.getBoundingClientRect();
    console.log(rect.top, window.innerHeight);
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      text.classList.add("active");
    } else {
      text.classList.remove("active");
    }
  });
});
