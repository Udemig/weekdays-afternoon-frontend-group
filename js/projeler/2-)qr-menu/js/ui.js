// UI Elemanlarını bir arada tutan obje
const uiElements = {
  menuList: document.querySelector("#menu-list"),
  buttons: document.querySelectorAll("input"),
};

// menu elemanlarını renderlayacak fonksiyon
const renderCard = (menu) => {
  // Dışarıdan parametre olarak geçilen menu dizisinin her elemanı için bir card html'i oluştur
  const cardsHtml = menu
    .map(
      (item) =>
        `      <div class="d-flex flex-column flex-md-row gap-3" id="card">
        <img
          src="${item.img}"
          alt="menu-card-image"
          class="img-fluid rounded shadow"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(
              2
            )} ₺</p>
          </div>
          <p class="lead">
           ${item.desc}
          </p>
        </div>
      </div>`
    )
    .join("");

  // Oluşturulan cardsHtml'ini arayüze aktar
  uiElements.menuList.innerHTML = cardsHtml;
};
export { uiElements, renderCard };
