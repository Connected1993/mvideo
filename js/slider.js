export const SLIDER = document.querySelector('.slider');
// узел node
export const LINE = SLIDER.querySelector('.slider__line');
// все изображения
const IMAGES =  LINE.querySelectorAll('.slider__line img');
// блок с точками
const BLOCK_DOTTEDS = SLIDER.querySelector('.slider__dotteds');
// массив элементов
let DOTTEDS = null;
// количество изображений
export const TOTAL = IMAGES.length;
// счётчик
export let counter = 0;

// стрелка лево
export function sliderLeft(){
    counter--;
    if ( counter < 0 )
    {
        // переопределяем счётчик
        counter = TOTAL - 1;
    }
    rollSlider();
    drawDotted();
}
// стрелка право
export function sliderRight(){
    counter++;
    if ( counter >= TOTAL )
    {
        // сброс счётчика
        counter = 0;
    }
    rollSlider();
    drawDotted();
}
// прокрутка слайдера
function rollSlider(){
    LINE.style.transform = `translateX(-${counter*100}%)`;
}
// отрисовка точек
function drawDotted(){
    // удаляем у всех элементов
    DOTTEDS.forEach(function(dotted,index){
        dotted.classList.remove('sm__dotted','active');
    });
    // устанавливаем по индексу
    DOTTEDS[counter].classList.add('sm__dotted','active');
}
// переключить на изображение
export function showSlide(number = 0){

    if (number >= TOTAL || number < 0){
        return false
    }
    // установили № изображения
    counter = number;
    rollSlider();
    drawDotted();
}
// при загрузки страницы
window.onload = function(){
    // перебераем все изображения
    // и рисуем в браузере
    IMAGES.forEach(function(value,index){
        // если он true а 0 это всегда false
        if (index){
            BLOCK_DOTTEDS.insertAdjacentHTML('beforeend',`<div class="slider__dotted" onclick="showSlide(${index})"></div>`);
        }
        else
        {
            BLOCK_DOTTEDS.insertAdjacentHTML('beforeend',`<div class="slider__dotted sm__dotted active" onclick="showSlide(${index})"></div>`);
        }
    });

    // после того как отрисовали 
    // находим элементы в DOM дереве
    DOTTEDS = document.querySelectorAll('.slider__dotted');
}


