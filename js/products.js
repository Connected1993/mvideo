// при загрузке страницы получаем хранилище
window.onload = () => {
  fetch(APP_URL+'/products?_start=0&_limit=12')
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
        // массив с данными
        renderProducts(products);
    });
};

// шаблон карточки
const template = document.querySelector("#card").content;
// общий блок для карточек
const cards = document.querySelector(".cards");

function renderProducts(products) {

  products.forEach((product) => {
    let card = template.querySelector(".card").cloneNode(true);
    // устанавливаем id товара в атрибут data-id для карточки
    card.dataset.id = product.id;
    // замена контента
    card.querySelector(".card__title").textContent = product.productname;
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
function addProduct(btn) {
  //console.log(btn.closest('.card').getAttribute('data-id'));
  //console.log(btn.closest('.card').dataset.id);
  //console.log(btn.dataset.id);
  let id = btn.dataset.id;

  // JSON.stringify(products); преобразования в строку в формате JSON
  // JSON.parse(products);    преобразования из строки в обьект или массив

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
