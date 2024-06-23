import {renderProducts} from '/js/products.js';

export let lazyCounter = 1;

const MAX_PRODUCT = 12;
const options = {
  // root: по умолчанию window,
  // но можно задать любой элемент-контейнер
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

export const lazyLoadProducts = (entries, observer) => {
  
    if (entries[0].isIntersecting) {
      fetch(APP_URL+`/products?_start=${(lazyCounter-1)*MAX_PRODUCT}&_limit=${MAX_PRODUCT}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
          if (products.length === 0) {
            observer.disconnect();
            return false;
          }
          // массив с данными
          renderProducts(products);
          lazyCounter++;
      });

    }
};


export const observer = new IntersectionObserver(lazyLoadProducts, options);

