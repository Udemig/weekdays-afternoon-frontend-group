// * Javascript Class Yapısı

// Javascript'de class yapısı düzenli bir şekilde kodları yönetmemizi sağlar.Bir classı önce tanımlamalı sonrasında bu class'dan bir örnek alarak class yapısı içerisindeki metotları kullanabiliriz.

// Bir class "class" keyword'ü ile tanımlanır.Bu keyword'den sonra class yapısına bir isim verilir.Verilen bu isim'den sonra ise {} oluşturulur.

class Car {
  // Kurucu metot
  constructor(brand, model) {
    this.year = 2020;
    this.brand = brand;
    this.model = model;
    this.colors = ["White", "Black", "Red", "Orange"];
  }

  writeToDocument() {
    document.write(
      `Araç marka: ${this.brand} Araç model:${this.model} Araç yıl: ${this.year} <br/>`
    );
  }

  writeColors() {
    this.colors.forEach((color) => {
      document.write(`Renk: ${color} <br/>`);
    });
  }
}

const carClass = new Car("BMW", "M3");

carClass.writeToDocument();

carClass.writeColors();

// Class'larda miras alma:

// Birden fazla classla çalışıldığında bazı durumlarda tekrar eden yapıları miras alarak önlyebiliriz.

class ManuelCar extends Car {
  // Kurucu Metot
  constructor(brand, model, year) {
    // super keyword'ü ile miras alınan class'ın constructor'ı bu kısıma alınmış olur.
    super(brand, model, year);
  }

  carInfo() {
    document.write(`Araba hakkında bilgilendirme Marka: ${this.brand} <br/>`);
  }
}

const manuelCarClass = new ManuelCar("Mercedes", "CLA");

manuelCarClass.writeToDocument();

manuelCarClass.writeColors();

// * Javascript Call,Bind,Apply Metotları

// Javascript'de call,bind,apply metotları ile bir objeye ait özellikleri bir başka objeye aktarabiliriz.

// ! call: Bu metot bağlam belirterek bir objeye ait özellikleri başka bir obje içerisinde kullanmamızı sağlar.

// ! apply: Bu metot tıpkı call metodu gibi bir objeye ait özellikleri başka bir objede kullanmamızı sağlar.call metodundan farkı ise dışarıdan verilecek argümanları bir dizi şeklinde ister.

// ! bind: Bu metot tıpkı call ve bind gibi bir objede bulunmayan bir özelliği başka bir objede kullanmamızı sağlar.Farkı ise bind metodu erişilmek istenen özelliği doğrudan değil bir bağlam belirterek kullanmamızı ister.

const kullanici = {
  isim: "Mehmet Can",
  soyisim: "Seyhan",
  yaş: 30,
  tanitim: function (şehir) {
    document.write(
      `Kullanıcı adı: ${this.isim} kullanıcı soyisim: ${this.soyisim} kullanici şehir: ${şehir} <br/>`
    );
  },
};

const kullanici1 = {
  isim: "Yusuf",
  soyisim: "YAMAN",
  yaş: 23,
};

kullanici.tanitim.call(kullanici1, "Malatya");

kullanici.tanitim.apply(kullanici1, ["Malatya"]);

const kullanici1Tanıtım = kullanici.tanitim.bind(kullanici1, "Malatya");

kullanici1Tanıtım();

// * Javascript BOM (Browser Object Model)

// Javascript'de açılan pencere ile alakalı işlemler yapabilmemizi BOM sağlar.

// * Window: Tarayıcıda açılan pencereyi temsil eder.Tüm değişkenler,metotlar,... buradaki window objesi içerisinden erişilebilir.

// const response = confirm("Silme işlemini onaylıyormusunuz ?");

// console.log(response);

// window.navigator.geolocation.getCurrentPosition(
//   (e) => {
//     console.log(`Kullanıcı konumuna erişildi.`);
//   },
//   () => {
//     console.log(`Kullanıcı konumuna erişilemedi.`);
//   }
// );

// * window.location ile tarayıcıda'ki url bilgilerine [hostname,pathname,search,...] erişebiliriz.
// console.log(window.location);

// * Javascript LocalStorage

// LocalStorage ile tarayıcıda veriler depolayabiliriz.Ama bu veriler çok küçük boyutta olmalıdır.10mb depolama sınırı vardır.

// Localstorage bizden string tipinde verileri ister.Bu sebeple veri kayıt ederken ve localeStorage'dan verileri alırken gerekli tip dönüşümlerini yapmamız gerekir.

// ! LocalStorage'a veri kayıt etmek için localStorage.setItem() metodu kullanılır.

const isim = "Yusuf";

localStorage.setItem("isim", JSON.stringify(isim));

// ! LocalStorage'dan veri almak için localStorage.getItem() metodu kullanılır.

const isim1 = JSON.parse(localStorage.getItem("isim"));

console.log(isim1);

// ! LocalStorage'dan bir veriyi silmek  için localStorage.removeItem() metodu kullanılır.

// localStorage.removeItem("isim");

// ! LocalStorage'ı temizlemek için localStorage.clear() metodu kullanılır.

localStorage.clear();
