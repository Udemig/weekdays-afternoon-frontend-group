// UI Elemanlarını bir arada tutan obje
const uiElements = {
  menuList: document.querySelector("#menu-list"),
  buttons: document.querySelectorAll("input"),
  detailWrapper: document.querySelector("#detail-wrapper"),
};

// menu elemanlarını renderlayacak fonksiyon
const renderCard = (menu) => {
  // Dışarıdan parametre olarak geçilen menu dizisinin her elemanı için bir card html'i oluştur
  const cardsHtml = menu
    .map(
      (item) =>
        `      <a href='/detail.html?id=${
          item.id
        }' class="d-flex flex-column flex-md-row gap-3 text-decoration-none text-dark" id="card">
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
      </a>`
    )
    .join("");

  // Oluşturulan cardsHtml'ini arayüze aktar
  uiElements.menuList.innerHTML = cardsHtml;
};

// Detay sayfasını renderlayacak fonksiyon
const renderDetailPage = (product) => {
  console.log(product);

  // detailWrapper içerisini dinamik şekilde renderlasın
  uiElements.detailWrapper.innerHTML = ` <!-- Top -->
      <div class="d-flex align-items-center justify-content-between">
        <a href="/">
          <img src="./images/home.png" width="35px" alt="home-icon" />
        </a>

     
        <a href="#" class="text-decoration-none text-dark">
          detail page / ${product.category} / ${product.title}
        </a>
      </div>


      <h1 class="text-center">${product.title}</h1>


      <img
        src="${product.img}"
        alt="menu-item-image"
        class="rounded object-fit-cover shadow"
        style="max-height: 400px"
      />

      <h4>Ürünün Kategorisi: <span class="text-success">${
        product.category
      }</span></h4>

      <h4>Ürünün Fiyatı: <span class="text-success">${(
        product.price * 30
      ).toFixed(2)} ₺</span></h4>

      
      <p class="lead">
      ${product.desc}
      </p>`;
};
export { uiElements, renderCard, renderDetailPage };
