// ! Ay Dizisi
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ! Html'de Javascript'e elemanları çekme
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");

// ! addBox elemanına tıklanma olaylarını izle
addBox.addEventListener("click", () => {
  // Popup'ı aktif et
  popupBox.classList.add("show");
  popup.classList.add("show");

  // body'nin kaydırılmasını engelle
  document.body.style.overflow = "hidden";
});

// ! closeBtn elemanına tıklanma olaylarını izle
closeBtn.addEventListener("click", () => {
  // Popup'ı pasif et
  popupBox.classList.remove("show");
  popup.classList.remove("show");

  // body'nin kaydırılmasını eski haline çevir
  document.body.style.overflow = "auto";
});

// ! form'un gönderilmesini izle
form.addEventListener("submit", (e) => {
  //  sayfa yenilemesini engelle
  e.preventDefault();

  // Form içerisindeki title ve description değerlerine eriş
  const title = e.target[0].value;
  const description = e.target[1].value;

  // Eğer title ve description kısımları boşsa kullanıcıya uyarı ver

  if (!title || !description) {
    alert("Plase fill in all fields.");

    return; // Fonksiyonu durdur
  }

  // Tarih objesinden örnek al
  const date = new Date();

  const id = date.getTime();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Oluşturulacak note için bir obje oluştur
  let noteItem = {
    title,
    description,
    id,
    date: ` ${month} ${day},${year}`,
  };

  console.log(noteItem);
});
