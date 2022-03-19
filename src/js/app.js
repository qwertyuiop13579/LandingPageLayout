// import * as functions from './modules/functions.js';


//####################################################################################3
// Value Buttons Block
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



//####################################################################################3
// Reviews Block

var arrowBack = document.querySelector(".reviews__arrow-back");
var arrowForward = document.querySelector(".reviews__arrow-forward");
var paginationItems = document.querySelectorAll(".pagination__item");
var selectedReviewIndex = 0;
var cards = document.querySelectorAll(".card");

paginationItems[selectedReviewIndex].classList.add('active');
cards[selectedReviewIndex].classList.add('visible');

arrowBack.addEventListener('click', function () {
    paginationItems[selectedReviewIndex].classList.remove('active');
    cards[selectedReviewIndex].classList.remove('visible');
    selectedReviewIndex--;
    if (selectedReviewIndex == -1) selectedReviewIndex = paginationItems.length - 1;
    paginationItems[selectedReviewIndex].classList.add('active');
    cards[selectedReviewIndex].classList.add('visible');
});

arrowForward.addEventListener('click', function () {
    paginationItems[selectedReviewIndex].classList.remove('active');
    cards[selectedReviewIndex].classList.remove('visible');
    selectedReviewIndex = selectedReviewIndex + 1;
    if (selectedReviewIndex == paginationItems.length) selectedReviewIndex = 0;
    paginationItems[selectedReviewIndex].classList.add('active');
    cards[selectedReviewIndex].classList.add('visible');
});
