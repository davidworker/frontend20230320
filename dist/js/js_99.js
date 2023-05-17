let main = document.querySelector('#main');
let lis = document.querySelectorAll('#menu li');

let num1 = document.querySelector('#num-1');
let showBtn = document.querySelector('#show-btn');

showBtn.addEventListener('click', () => {
    num1.value = 'ABC';
});