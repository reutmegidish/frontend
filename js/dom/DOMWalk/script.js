const myLi = document.querySelector("li.start-here");

myLi.textContent = "main title";

const myLiNextSibling = myLi.nextElementSibling;
console.log(myLiNextSibling);

const myUl = myLiNextSibling.firstElementChild;
console.log(myUl);

const newSubTitle = document.createElement("li");

const subTitleText = document.createTextNode("sub title 4");

newSubTitle.appendChild(subTitleText);

// myLi.appendChild(newSubTitle);
myUl.appendChild(newSubTitle);

// 5
// myLiNextSibling.nextElementSibling.remove();

const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

const title = document.head.querySelector("title");
title.textContent = "dom";

const divEl = myLiParent.nextElementSibling;
const p = divEl.firstChild;
p.textContent = "Now I know how to traverse the DOM :D";
