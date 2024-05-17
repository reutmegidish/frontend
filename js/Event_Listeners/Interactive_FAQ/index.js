const faqItem = document.querySelectorAll(".faq-item");

faqItem.forEach((element) => {
  element.addEventListener("click", () => toggle());
  console.log("1", element);
  console.log(element);
  function toggle() {
    element.lastElementChild.classList.toggle("faq-answer");
  }
});
