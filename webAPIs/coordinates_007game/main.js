"use strict";

const tag = document.querySelector(".tag");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  //   tag.style.top = parseFloat(e.clientY) + "px";
  //   tag.style.left = parseFloat(e.clientX) + "px";
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.innerText = `(${e.clientX},${e.clientY})`;
  tag.style.top = `${y}px`;
  tag.style.left = `${x}px`;
});
