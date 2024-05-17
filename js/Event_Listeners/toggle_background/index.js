const toggleButton = document.querySelector("#toggleButton");
const body = document.body;

function toggleBackgroundColor() {
  body.classList.toggle("dark");
}

toggleButton.addEventListener(
  "click",
  //   toggleBackgroundColor
  (event) => toggleBackgroundColor()
);
console.log(15);
