import getProducts from "./api.js";
import { addToCart } from "./cart.js";
import { renderProducts, UIEleman } from "./ui.js";

// Menu Icon'una tıklanma olayını izle
UIEleman.menuIcon.addEventListener("click", () => {
  // Header kısmındaki nav kısmını aç kapa yap
  UIEleman.nav.classList.toggle("open");
});

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", async () => {
  // Hangi sayfadayız ?
  if (window.location.pathname.includes("/cart.html")) {
    console.log(`Sepet sayfası`);
  } else {
    // Api'a istek at
    const products = await getProducts();

    // Apidan alınan her ürün için arayüzü renderla
    renderProducts(products, (e) => {
      addToCart(e, products);
    });
  }
});
