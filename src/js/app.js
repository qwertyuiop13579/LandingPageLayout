import * as functions from './modules/functions.js';

console.log('Hello world!');

functions.func();


var valueBtns = document.querySelectorAll(".btn-value");
var capacityImg = document.getElementById('capacity__img');
var chosedValue = 0;

valueBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {

        valueBtns.forEach((btn1) => {
            btn1.classList.remove('active');
        });
        valueBtns[index].classList.add('active');

        switch (index) {
            case 0: capacityImg.src = "img/capacity/small.svg"; break;
            case 1: capacityImg.src = "img/capacity/middle.svg"; break;
            case 2: capacityImg.src = "img/capacity/standart.svg"; break;
            case 3: capacityImg.src = "img/capacity/big.svg"; break;
        }
        chosedValue = index;
    });
});

var orderGasBtn = document.querySelector(".capacity__btn");
orderGasBtn.addEventListener('click', function () {
    console.log("You orders car with", chosedValue, 'gas capacity');
});