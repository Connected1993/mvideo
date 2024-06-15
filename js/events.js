import {timer1,rollInterval} from './timers.js';
import { SLIDER,counter } from './slider.js';


// останавливаем прокрутку слайдера при наведении на сам слайдер
SLIDER.addEventListener('mouseenter',function(){
    console.log(timer1);
    clearInterval(timer1);
});
SLIDER.addEventListener('mouseleave',function(){
    rollInterval();
});