import { counter, sliderRight,showSlide, TOTAL } from "./slider.js";

 export let timer1 = null;

 export function rollInterval(){
    // запускается каждый раз с интервалом в 1 сек
    timer1 = setInterval(function(){
        sliderRight();
        // если дошли до конца   
        if (counter >= (TOTAL-1) ){
          // прокручиваем на первый слайд
          showSlide(0);
          // тормозим
          clearInterval(timer1);
        }
    },1000);
}
//  запускаем прокрутку
 //rollInterval();


