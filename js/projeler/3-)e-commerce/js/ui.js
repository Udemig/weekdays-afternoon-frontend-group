// UI Elemanlarını bir arada tutan obje
const UIEleman = {
  menuIcon: document.querySelector("#menu-icon"),
  nav: document.querySelector("nav"),
  productContainer: document.querySelector(".product-container"),
};

// Product kartlarını render edecek fonksiyon
const renderProducts = (products, callBackFunction) => {
  // products içerisindeki her eleman için bir html yapısı oluştur
  const productsHTML = products
    .map(
      (product) => `<div class="product-card">
      
          <img
            src="${product.image}"
            alt="product-image"
          />
         
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <button data-id='${product.id}'  class="add-to-cart-button">Add to cart</button>
          </div>
        </div>`
    )
    .join("");

  // Oluşturulan html'i arayüzde renderla
  UIEleman.productContainer.innerHTML = productsHTML;

  // Class'ı add-to-cart-button olan elemanlara eriş
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  // addToCartButtons bir dizi olduğundan addEventListener eklenemez.Bu sebeple ilk olarak addToCartButtons dizisi içerisinde yer alan her elemana teker teker erişmeli sonrasında addEventListener eklemeliyiz.

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", callBackFunction);
  });
};

export { UIEleman, renderProducts };
