// Js Import
import getMenu from "./api.js";
import { renderCard, uiElements } from "./ui.js";

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", async () => {
  //Api'dan menu verilerini al
  const menuData = await getMenu();

  // Menu verileri neticesinde elde edilen card'ları arayüzde renderla
  renderCard(menuData);

  // addEventListener'lar tekil html elemanlarına ekleneceğinden buttons içerisindeki herbir elemana ayrı ayrı eriş
  uiElements.buttons.forEach((button) => {
    // UI elements içerisinde bulunan butonlara tıklanılma olayını izle
    button.addEventListener("click", (e) => {
      // Tıklanılan eleman içerisinde bulunan id'ye eriş[Buradaki id ürünlerin kategorilerine denk geliyor]
      const selectedCategory = e.target.id;

      // Erişilen kategorideki elemanlarını filtrele
      const filtredMenuData = menuData.filter(
        (item) => item.category == selectedCategory
      );

      // Eğer seçili kategori "all" ise tüm elemanları değilse seçili kategoriye ait elemanları renderla
      if (selectedCategory === "all") {
        // Tüm ürünleri renderla
        renderCard(menuData);
      } else {
        // Seçili kategorideki elemanları arayüzde renderla
        renderCard(filtredMenuData);
      }
    });
  });
});
