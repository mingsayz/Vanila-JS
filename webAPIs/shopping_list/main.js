'use strict'

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');


function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    console.log(text);
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼이 포함되어야함)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. input 폼을 초기화 한다.
    input.value = '';
    input.focus();
}

addBtn.addEventListener('click',()=>{
    onAdd();
});