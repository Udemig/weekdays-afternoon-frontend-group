// Localestorage'a kayıt yapacak fonksiyon
const saveToLocaleStorage = (key, items) => {
  // Dışarıdan verilen key değerine karşılık dışarıdan verilen items'ı kayıt et
  localStorage.setItem(key, JSON.stringify(items));
};

// Localestorage'dan eleman alacak fonksiyon
const getFromLocaleStorage = (key) => {
  // Dışarıdan verilen key değerine karşılık localestorage'dan eleman al
  const cart = JSON.parse(localStorage.getItem(key)) || [];

  return cart;
};

export { saveToLocaleStorage, getFromLocaleStorage };
