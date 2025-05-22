// * DOM (Document Object Model):

// Kullanıcının arayüzde dinamik işlemler [Tıklama,sürükleme,...] yapabilmesini sağlamak için DOM kullanılır.

// DOM ile html elemanlarına müdahelede bulunabilmek için ilk olarak html elemanları js kısmına çekmemiz gerekir.Html'den js kısmına eleman çekmek için kullanılan metotlar:

// 1-)document.getElementsByTagName(): Html'den elemanları etiket adına göre çekmek için kullanılır.Bu metot html'den çektiği elamanlar birden fazla olabileceğinden erişilen elemanları bir collection şeklinde döner.

const title1 = document.getElementsByTagName("h1");

// console.log(title1[0]);

// 2-)document.getElementsByClassName(): Html'den elemanları class adına göre çekmek için kullanılır.Bu metot html'den çektiği elamanlar birden fazla olabileceğinden erişilen elemanları bir collection şeklinde döner.

const title2 = document.getElementsByClassName("title-2");

// console.log(title2[0]);

// 3-)document.getElementById(): Html'den elemanları id'sine göre çekmek için kullanılır.

const title3 = document.getElementById("title-3");

// console.log(title3);

// * Html'den elemanlara erişmek için kullanılan bu 3 metot haricinde bu 3 metodun görevini tek başına yapabilen document.querySelector adında bir metod vardır.

// ! Bu metot ile html'den bir elemanı class veya id'sine göre çekmek istersek class adının başına "." id'nin başına "#" konulur.

const title4 = document.querySelector("#title-4");

// console.log(title4);

// document.querySelector metodu ile html'deki elemanlara erişmeye çalışırken belirtilen seçicide birden fazla eleman varsa bu elemanlardan ilkini alırız.Ama eğer belirtilen seçicide birden fazla elemana erişmek istiyorsak document.querySelectorAll metodu kullanılır.document.querySelectorAll metodu belirtilen seçicideki elemanları bir liste şeklinde döndürür.

const buttons = document.querySelectorAll(".button");

// console.log(buttons);

// Erişilen elemanlara bazı müdahelelerde bulunabiliriz:

// * 1-) Still Özelliğini Style Olarak Ekleme:

// Bir elemana still özelliği vermek için eleman adının sonuna ".style" eklenir.Sonrasında verilmek istenen still özelliği yazılır.Eğer verilecek still özelliği birden fazla kelimeden oluşuyorsa bunu camelCase 'e uygun şekilde yazmamız gerekir.

title4.style.backgroundColor = "red";
title4.style.fontSize = "40px";

// * 2-) Still Özelliğini Class İle Ekleme:

// Bir elemana still özelliğini javascript'de dinamik şekilde eklemek için erişilen elemana bir class eklenir.Eklenen bu class altında verilmek istenen still özellikleri kodlanır.

const title5 = document.querySelector("#title-5");

const description = document.querySelector("#text");

// console.log(title5);

// Dinamik şekilde class ekleme
title5.classList.add("title");

// Dinamik şekilde class kaldırma
description.classList.remove("description");

// Bir elemanın classını belirleme
buttons[0].className = "btn";

// * 3-) Elemanların Html İçeriğini Belirleme

// Bir html elemanın içeriğini belirlemek için:

// ? innerHTML: Bir elemanın Html içeriğini belirlemek için kullanılır.

// ? innerText: Bir elemanın yazı içeriğini belirlemek için kullanılır.

description.innerHTML = "<a href='https://github.com/'>Github'a Git</a>";

title5.innerText = " Lorem ipsum ";

// ? textContent: innerText ile aynı işleve sahiptir.
buttons[1].textContent = "Selam";

// * 4-) Event Listeners (Olay İzleyicileri)

// Arayüzdeki tıklanma,sürüklenme,... gibi kullanıcı etkileşimine bağlı olayları gerçekleştirmek için ilk olarak elemana .addEventListener  metodu eklenir.Bu metot bizden bir eventType birde belirtilen bu olayın gerçekleşmesi durumunda çalışacak bir fonksiyon ister.

const alertBtn = document.querySelector("#alert-btn");

// Click
alertBtn.addEventListener("click", () => {
  alert("Butona tıklandı");
});

const dragTitle = document.querySelector("#drag-title");

// DragStart
dragTitle.addEventListener("dragstart", () => {
  console.log("Sürüklenme başlandı");
});

// DragStart
dragTitle.addEventListener("drag", () => {
  console.log("Sürüklenmeeeee");
});

// DragEnd
dragTitle.addEventListener("dragend", () => {
  console.log("Sürüklenme bitti");
});

// todo: Formun gönderilmesi izle ve form içerisindeki değerlere eriş

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // Sayfa yenilemesini engelle
  event.preventDefault();

  console.log(event.target[0].value);
  console.log(event.target[1].value);
  console.log(event.target[2].value);

  console.log("Kayıt işlemi başarılı");

  // Form'u temizleme 1.yöntem

  //   event.target[0].value = "";
  //   event.target[1].value = "";
  //   event.target[2].value = "";

  // Form'u temizleme 2.yöntem
  form.reset();
});

const themaBtn = document.querySelector(".thema-btn");

const wrapper = document.querySelector(".wrapper");

themaBtn.addEventListener("click", () => {
  // classList.add ile bir classı ekleriz classList.remove ile bir classı çıkarırız.Ama ekle-çıkar yapmak istiyorsak bunu classList.toggle ile daha kolay bir şekilde yapabiliriz.
  wrapper.classList.toggle("dark");
});

// * 5-) Eleman Oluşturma

// todo: Kullanıcı oluştur butonuna tıklayınca arayüze yeni bir div ekleyen uygulamanın code-script'ini yazın

const createBtn = document.querySelector(".create-btn");
const container = document.querySelector(".container");

createBtn.addEventListener("click", () => {
  // * Html'de bir eleman oluşturmak için "document.createElement" metodu kullanılır.Bu metot ("") içerisinde hangi eleman oluşturulacaksa onun adını ister.
  // i-) Bir Html elemanı oluştur
  const newDiv = document.createElement("div");

  // ii-) Oluşturulan elemana class ekle
  newDiv.classList.add("item");

  //   iii-) Oluşturulan elemanın yazı içeriğini belirle
  newDiv.textContent = "Item";

  // * Javascript'de oluşturulan elemanı Html kısmına eklemek için "appendChild" metodu kullanılır.Bu metot elemanların ekleneceği kapsayıcı adından sonra yazılarak kullanılır.Bizden eklenecek elemanları parametre olarak vermemizi ister.

  container.appendChild(newDiv);
});

// * Javascript Class Yapısı

// Class yapısı oluşturulurken ilk olarak "class" keyword'ü kullanılır.Devamında clas yapısına bir isim verilir.Verilen bu isimin devamında {} açılır.Buradaki {} içerisinde class yapısının sahip olacağı yapılar kodlanır.

// constructor: Class yapısının kurucu metodudur.Bu metot class yapısı çağırıldığında ilk olarak çalışan yapıdır.

class Person {
  // Kurucu metot
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  writeName() {
    document.write(`Kullanıcı isim: ${this.name}  <br/>`);
  }

  writeSurname() {
    document.write(`Kullanıcı soyisim:  ${this.surname}  <br/>`);
  }

  writeAge() {
    document.write(`Kullanıcı yaş:  ${this.age}  <br/>`);
  }
}

// Class yapısı içerisinde bulunan metotları kullanmak için classın örneğini almamız gerekir.Örnek almak için "new" keyword'ü kullanılır.Sonrasında örneği alınan bu yapı bir değere atanır.Atanan bu değer üzerinden class yapısının içerisindeki metotlara erişilir.

const personClass = new Person("Mehmet Can", "Seyhan", 30);

personClass.writeName();
personClass.writeSurname();
personClass.writeAge();
