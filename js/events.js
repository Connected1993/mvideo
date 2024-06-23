import { timer1, rollInterval } from './timers.js';
import { SLIDER, counter } from './slider.js';


// останавливаем прокрутку слайдера при наведении на сам слайдер
SLIDER.addEventListener('mouseenter', function () {
    clearInterval(timer1);
});
SLIDER.addEventListener('mouseleave', function () {
    rollInterval();
});