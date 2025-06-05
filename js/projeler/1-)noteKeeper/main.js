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
const wrapper = document.querySelector(".wrapper");
const popupTitle = document.querySelector("header h1");
const popupButton = document.querySelector("form button");

// ! Note güncelleme işlemi için global değişkenler oluştur
let isUpdate = false;
let updateId = null;
// ! localStorage'dan notes key'ine sahip elemanları al ve js formatına çevir eğer bu key değerine sahip olan eleman yoksa bir dizi döndür

let notes = JSON.parse(localStorage.getItem("notes")) || [];

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

  // Eğerki güncelleme işlemi yapılacaksa
  if (isUpdate) {
    // notes dizisi içerisinde güncellenecek notun index'ini bul
    const noteIndex = notes.findIndex((note) => note.id == updateId);

    // Index'i bilinen elemanı diziden güncelle
    notes[noteIndex] = {
      title,
      description,
      id,
      date: ` ${month} ${day},${year}`,
    };

    // Güncelleme modunu iptal et
    isUpdate = false;
    updateId = null;

    // Title ve button içerisini sıfırla
    popupTitle.textContent = "New Note";
    popupButton.textContent = "Add Note";
  } else {
    // Oluşturulacak note için bir obje oluştur
    let noteItem = {
      title,
      description,
      id,
      date: ` ${month} ${day},${year}`,
    };

    // Oluşturulan noteItem objesini notes dizisine ekle
    notes.push(noteItem);
  }

  // notes dizisini localStorage'a kayıt et
  localStorage.setItem("notes", JSON.stringify(notes));

  // Formun resetle
  form.reset();

  // Popup'ı pasif et
  popupBox.classList.remove("show");
  popup.classList.remove("show");

  // body'nin kaydırılmasını eski haline çevir
  document.body.style.overflow = "auto";

  // Oluşturulan note elemanlarını render et
  renderNotes(notes);
});

// ! Note'ları renderlayan fonksiyon
function renderNotes(notes) {
  // Mevcut note elemanlarını arayüzden kaldır
  document.querySelectorAll(".note").forEach((item) => item.remove());
  // notes dizisindeki her eleman için bir html oluştur
  notes.forEach((note) => {
    // notes dizisi içerisindeki her eleman için bir html oluştur
    let noteHtml = `      <div class="note">
     
        <div class="details">
          <h2 class="note-title">${note.title}</h2>
          <p class="note-description">${note.description}</p>
        </div>
        
        <div class="bottom">
          <span class="date">${note.date}</span>
          <div class="settings">
            <i class="bx bx-dots-horizontal-rounded"></i>

            <ul class="menu">
              <li data-id='${note.id}' class="edit-btn"><i class="bx bx-edit"></i> Edit</li>
              <li data-id='${note.id}' class="delete-btn"><i class="bx bx-trash-alt"></i>Delete</li>
            </ul>
          </div>
        </div>
      </div>`;

    // addBox elemanının sonrasında oluşturulan html'leri ekle
    // ! insertAdjacentHTML metodu bir html elemanına göre bir elemanı arayüze konumlamak için kullanılır.
    addBox.insertAdjacentHTML("afterend", noteHtml);
  });
}

// ! Menu kısmını görünür kılacak fonksiyon
function showMenu(eleman) {
  // eleman'ın kapsam elemanına eriş ve bu elemana show classı ekle
  // * parentElement ile bir elemanın kapsam elemanına erişiriz
  eleman.parentElement.classList.add("show");

  // Menu haricinde bir yere tıklanırsa menu'yü kapat
  document.addEventListener("click", (e) => {
    // Eğer menu haricinde ve üç nokta haricinde bir yere tıklanırsa menu'yü kapat
    if (e.target.tagName != "I" || e.target != eleman) {
      eleman.parentElement.classList.remove("show");
    }
  });
}

// ! wrapper kısmındaki tıklanmaları izle
wrapper.addEventListener("click", (e) => {
  // Tıklanılan eleman üç nokta ise
  if (e.target.classList.contains("bx-dots-horizontal-rounded")) {
    showMenu(e.target);
  }
  // Tıklanılan eleman  deleteBtn ise
  if (e.target.classList.contains("delete-btn")) {
    // Kullanıcıdan  onay al
    const response = confirm("Bu notu silmek istediğinize eminmisiniz ?");

    // Eğer kullanıcı onay verirse silme işlemini gerçekleştir
    if (response) {
      // Tıklanılan elemanın id'sine eriş
      const noteId = +e.target.dataset.id;

      // Id'si bilinen elemanı notes dizisinden kaldır
      notes = notes.filter((note) => note.id != noteId);

      // notes dizisinden kaldırılan elemanlar neticesinde elde edilen final diziyi localStorage'a kayıt et
      localStorage.setItem("notes", JSON.stringify(notes));

      // Notları render et
      renderNotes(notes);
    }
  }

  // Tıklanılan eleman editBtn ise
  if (e.target.classList.contains("edit-btn")) {
    // Düzenlenecek note elemanının id'sine eriş
    const noteId = +e.target.dataset.id;

    // Id'si bilinen notu notes dizisinden bul
    const updateNote = notes.find((note) => note.id === noteId);

    console.log(updateNote);

    // Popup'ı aç
    popupBox.classList.add("show");
    popup.classList.add("show");

    // Açılan popup içerisindeki title ve button'ı içeriğini güncelle
    popupTitle.textContent = "Update Note";
    popupButton.textContent = "Update";

    // Title ve description kısımlarını içeriğine güncellenecek notun bilgilerini aktar
    form[0].value = updateNote.title;
    form[1].value = updateNote.description;

    // Güncelleme işlemini için gerekli değişkenleri değerini güncelle
    isUpdate = true;
    updateId = noteId;
  }
});

// ! Sayfa yüklendiğinde renderNotes fonksiyonunu çalıştır
document.addEventListener("DOMContentLoaded", renderNotes(notes));
