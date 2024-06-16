import {SLIDER,LINE,sliderLeft,sliderRight,showSlide} from './slider.js';

//touchstart - когда пользователь касается экрана
//touchmove - при движении пальца по экрану
//touchend - когда палец отрывается от экрана

let startX,startY,endX,endY = null;
let counter = null;

// добавили обработчик события touchstart для элемента LINE
SLIDER.addEventListener('touchstart',function(Event){
    
    document.querySelectorAll('.slider__dotted').forEach(function(dotted,index){
            if (dotted.classList.contains('active')) {
                counter = index+1;
            }
    });
    
    // получаем начальные координаты 1 пальца
    startX = Event.touches[0].clientX;
    startY = Event.touches[0].clientY;
    //https://developer.mozilla.org/ru/docs/Web/API/TouchEvent
    //touches - TouchesList  список всех точек(пальцев) касания
    
});
SLIDER.addEventListener('touchmove',function(Event){
    // конечные координаты 1 пальца
    endX = Event.touches[0].clientX;
    endY = Event.touches[0].clientY;

	var target = SLIDER.getBoundingClientRect();
	var x = ((endX - startX) - 1000)*counter;
	var y = endY - target.top;

    console.log(x);

    let formula = `calc(${counter*100}% - ${x}px)`;
    //LINE.style.transform = `translateX(${formula})`;
});
// когда отпустили палец
SLIDER.addEventListener('touchend',function(Event){

    // получаем разницу в координатах
    let deltaX = endX - startX;
    let deltaY = endY - startY;

    if (deltaX > 100){
        sliderLeft();
    }
    
    if (deltaX < -100){
        sliderRight();
    }

    // обнуляем
    startX,startY,endX,endY = null;
});






