// глобальная функция для получения данных из хранилища по названию ключа
const getStorage = (key) => {
    let data = localStorage.getItem(key);
    if (data) {
        // возвращаем данные из localStorage в формате обьекта
        return JSON.parse(data);
    }
    return null;
}

// глобальная функция для сохраниения данных в хранилище по названию ключа
const setStorage = (key,data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// алиас для быстрого сохранения товаров 
const setStorageProduct = (data)=> setStorage('key_products',data);
// алиас для быстрого получения данных о товарах 
const getStorageProduct = () => getStorage('key_products');
// алиас для быстрого получения данных о пользователе
const getStorageUser = () => getStorage('user');