import { SLIDER, LINE, sliderLeft, sliderRight, showSlide } from './slider.js';

//touchstart - когда пользователь касается экрана
//touchmove - при движении пальца по экрану
//touchend - когда палец отрывается от экрана
// 30% от ширины слайдера для плавной прокрутки слайдов
const percentSwapImage = 0.40;
let startX, startY, endX, endY = null;
let counter = null;
let touchstart = null;
let touchmove = null;
let sizeImage = null;
let swapSizeImage = null;


// добавили обработчик события touchstart для элемента LINE
SLIDER.addEventListener('touchstart', function (Event) {
    // получили размер слайдера
    sizeImage = Math.round(SLIDER.getBoundingClientRect().width);
    // высчитываем процентное соотношение для плавной прокрутки слайдов
    swapSizeImage = sizeImage * percentSwapImage;
    // флаг первого касания
    touchstart = true;

    document.querySelectorAll('.slider__dotted').forEach(function (dotted, index) {
        if (dotted.classList.contains('active')) {
            counter = index + 1;
        }
    });

    // получаем начальные координаты 1 пальца
    startX = Event.touches[0].clientX;
    startY = Event.touches[0].clientY;
    //https://developer.mozilla.org/ru/docs/Web/API/TouchEvent
    //touches - TouchesList  список всех точек(пальцев) касания

});
SLIDER.addEventListener('touchmove', function (Event) {

    // конечные координаты 1 пальца
    endX = Event.touches[0].clientX;
    endY = Event.touches[0].clientY;

    let target = SLIDER.getBoundingClientRect();
    // x - на сколько пикселей прокрутилось изображения
    let x = parseInt(endX - startX);
    let y = endY - target.top;

    console.log(x);

    // Плавная прокрутка изображения Left
    if (x > 0 && x < swapSizeImage && touchstart) {
        // флаг первого движения пальца
        touchmove = true;
        LINE.style.transform = `translateX(calc(-${(counter - 1) * 100}% + ${x}px))`;
    }
    if (x > swapSizeImage && touchstart) {
        touchmove = null;
        touchstart = null;
        sliderLeft();
    }

    // Плавная прокрутка изображения Right
    if (x < 0 && x > -swapSizeImage && touchstart) {
        // флаг первого движения пальца
        touchmove = true;
        LINE.style.transform = `translateX(calc(-${(counter - 1) * 100}% + ${x}px))`;
    }
    if (x < -swapSizeImage && touchstart) {
        touchmove = null;
        touchstart = null;
        sliderRight();
    }
});

// когда отпустили палец
SLIDER.addEventListener('touchend', function (Event) {
    touchstart = null;
    // получаем разницу в координатах
    let deltaX = endX - startX;
    let deltaY = endY - startY;

    if (deltaX > 0 && deltaX < swapSizeImage && touchmove) {
        touchmove = null;
        touchstart = null;
        showSlide(counter - 1);
    }

    if (deltaX < 0 && deltaX < swapSizeImage && touchmove) {
        touchmove = null;
        touchstart = null;
        showSlide(counter - 1);
    }

    // обнуляем
    startX, startY, endX, endY = null;
});






