// шаблон карточки
const template = document.querySelector("#card").content;
// общий блок для карточек
const cards = document.querySelector(".cards");

export function renderProducts(products) {


  products.forEach((product) => {
    let card = template.querySelector(".card").cloneNode(true);

    if ( Object.keys( getStorageProduct() ).includes(`${product.id}`))
    {
        card.querySelector('button').classList.add('card_added','card_active');
    } 
    else
    {
        card.querySelector('button').classList.add('card_remove');    
    }
    // устанавливаем id товара в атрибут data-id для карточки
    card.dataset.id = product.id;
    // замена контента
    card.querySelector(".card__title").textContent = product.name;
    card.querySelector(".card__image").href =
      "/pages/card/index.html?id=" + product.id;
    card.querySelector(".card__title").href =
      "/pages/card/index.html?id=" + product.id;
    card.querySelector("img").src = `./src/phones/${product.img}`;
    card.querySelector(".card__prices").textContent = product.price;
    card.querySelector(".card__label").textContent = product.discount;
    // положили id товара в атрибут data-id у кнопки
    card.querySelector(".card__add").dataset.id = product.id;
    // отрисовываем карточку в общий блок
    cards.insertAdjacentElement("beforeend", card);
  });

}

 export function addProduct(btn) {
  let id = btn.dataset.id;

  // получаем данные из localStorage по ключу key_products
  let storage = localStorage.getItem("key_products");

  // если есть ключ key_products в localStorage
  if (storage) {
    // преобразовываем строку в обьект и перезаписываем переменную storage
    storage = JSON.parse(storage);
  } else {
    // если нет ключа key_products в localStorage, то создаем пустой обьект
    storage = {};
  }

  // если товара нет в корзине, то добавляем
  if (!storage[id]) {
    storage[id] = 1;
  } else {
    storage[id] += 1;
  }

  localStorage.setItem("key_products", JSON.stringify(storage));
}

// импрортировали функция addProduct в глобальную область видимости
window.addProduct = addProduct;
