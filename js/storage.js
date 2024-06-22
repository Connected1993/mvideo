const getStorage = (key) => {
    let data = localStorage.getItem(key);
    if (data) {
        // возвращаем данные из localStorage в формате обьекта
        return JSON.parse(data);
    }
    return null;
}


const getStorageProduct = () => getStorage('key_products');
const getStorageUser = () => getStorage('user');