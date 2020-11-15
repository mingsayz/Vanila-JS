"use strict";

const tag = document.querySelector(".tag");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");

addEventListener('load',()=>{
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.innerText = `(${e.clientX},${e.clientY})`;
    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;

    //top, left 를 업데이트 시키는건 계속해서 layout, print, composition 과정이 일어나기때문에 성능이 좋지않음.
    // composition만 일어나는 transform을 사용하는게 효율적.
    // 참고 : https://csstriggers.com/

  });


});