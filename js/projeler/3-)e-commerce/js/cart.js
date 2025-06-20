import { getFromLocaleStorage, saveToLocaleStorage } from "./helper.js";

// Localstorage'dan cart key'ine sahip elemanlara eriş
let cart = getFromLocaleStorage("cart");

// Sepete eleman ekleyecek fonksiyon
const addToCart = (e, products) => {
  // Tıklanılan elemanın id'sine eriş
  const productId = +e.target.dataset.id;

  // Erişilen id'ye sahip elemanı products içerisinden bul
  const product = products.find((product) => product.id === productId);

  // Bu eleman önceden sepete eklendi mi?
  const exitingItem = cart.find((item) => item.id === productId);

  // Eğer ürün önceden sepete eklendiyse bu ürünün miktarını güncelle;eklenmediyse elemanı sepete ekle
  if (exitingItem) {
    // Ürünün miktarını güncelle
    exitingItem.quantity++;
  } else {
    // Sepete eklenecek elemanı hazırla
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    // Sepete eklenecek elemanı cart dizisine ekle
    cart.push(cartItem);
  }

  // Cart dizisini localestorage'a kayıt et
  saveToLocaleStorage("cart", cart);

  // Sepete ekle butonu içerisini güncelle
  e.target.textContent = "Added";

  // 2s sonra butonun içerisini eski haline çevir
  setTimeout(() => {
    e.target.textContent = "Add to cart";
  }, 2000);
};

export { addToCart };
