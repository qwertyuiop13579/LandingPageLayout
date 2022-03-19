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





//####################################################################################3
// Answers Block

var answersItems = document.querySelectorAll(".answers__item");

answersItems.forEach((item) => {
    item.addEventListener('click', function () {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.children[0].children[0].children[0].src = "img/answers__arrow.svg";
        }
        else {
            item.classList.add('active');
            item.children[0].children[0].children[0].src = "img/answers__arrow-active.svg";
        }
    });
});




//####################################################################################3
// Popup Block

var generalBtn = document.querySelector(".general__btn");
var pricesBtns = document.querySelectorAll(".prices__btn");
var capacityBtn = document.querySelector(".capacity__btn");
var contactsBtn = document.querySelector(".contacts__btn");
var popupBtn = document.querySelector(".popup__btn");

var popupEl = document.querySelector(".popup");

function popUp() {
    popupEl.classList.add('visible');
    let body = document.querySelector('body');
    body.style.overflow = "hidden";
}

generalBtn.addEventListener('click', popUp);
pricesBtns.forEach((btn) => { btn.addEventListener('click', popUp); });
capacityBtn.addEventListener('click', popUp);
contactsBtn.addEventListener('click', popUp);

popupBtn.addEventListener('click', function (event) {
    // TODO: ADD logic to send info on server

    let name = document.querySelector('.popup__name');
    let phone = document.querySelector('.popup__phone');

    setTimeout(() => {
        popupEl.classList.remove('visible');
        // alert(`Вы заказали доставку газа. Ваше имя: ${name.value}. Ваш телефон: ${phone.value}.`)
        console.log(`You ordered gas. Your name: ${name.value}. Your phone: ${phone.value}.`)
        name.value = "";
        phone.value = "";
        window.location.assign('../thanks.html');
    }, 200);
    event.preventDefault();
})

