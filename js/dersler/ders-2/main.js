// * Javascript Fonksiyonlar

// Javascript fonksiyonları belirli bir işlevi yerine getiren kod parçacıklarıdır.Fonksiyonları kullanmak için ilk olarak bu fonksiyonu tanımlamalı sonrasında ise gerekli yerde bu fonksiyonu çağırmalıyız.

// ? Fonksiyon Tanımlama Nasıl Yapılır?

// Fonksiyon tanımlamak için "function" anahtar kelimesini kullanırız. Ardından fonksiyonun ismini yazar ve (){} oluştururuz.Buradaki {} içerisinde fonksiyonun yapmasını istediğimiz işlev kodlanır.

//  Fonksiyon Tanımlama
function çiktiVer() {
  document.write("Selamlar,nasılsınız?", "<br/>");
}

// Fonksiyon Çağırma
çiktiVer();

// todo: Toplama işlemi yapan bir fonksiyon oluşturunuz
let sayi1 = 12;
let sayi2 = 34;

//  Fonksiyon Tanımlama

function toplama() {
  let toplam = sayi1 + sayi2;

  document.write("Toplam:", toplam, "<br/>");
}

// Fonksiyon Çağırma
toplama();

// ? Bir fonksiyonu nasıl dinamik hale getirebiliriz?

// Fonksiyonun dinamik hale gelmesi için parametre kullanılır.

// todo: Dışarıdan alınan 2 adet sayıyı çarpan bir fonksiyon oluşturunuz

function çarpma(a, b) {
  let sonuç = a * b;

  document.write("Sonuç:", sonuç, "<br/>");
}

çarpma(3, 4);
çarpma(4, 5);
çarpma(12, 10);

// ? Fonksiyonun bir değeri döndürmesi nasıl sağlanır?

// Fonksiyonun bir değeri döndürmesi için "return" anahtar kelimesi kullanılır. Bu anahtar kelime ile fonksiyonun döndürmesini istediğimiz değeri belirleriz. Bu durumda fonksiyonu çağırdığımız yerde bu değeri döndürürüz.

function stokHesapla(a, b, c) {
  let stok = a + b + c;

  return stok;
}
let toplamStok = stokHesapla(3, 4, 5);

document.write("toplamStok:", toplamStok, "<br/>");

// * Javascript Girdi Metotları

// Javascript girdi metotları kullanıcıdan veri almak için kullanılır. Bu metotlar ile kullanıcıdan alınan veriler değişkenlere atanabilir ve bu değişkenler üzerinde işlemler yapılabilir.

// * prompt():
// Kullanıcıdan veri almak için kullanılan bir metottur. Bu metot ile kullanıcıdan alınan veri string olarak döndürülür. Bu nedenle bu veriyi kullanmadan önce uygun bir veri tipine dönüştürmek gerekebilir. Bu metot ile kullanıcıdan alınan veri değişkenlere atanabilir ve bu değişkenler üzerinde işlemler yapılabilir.

// let kullaniciSayi = Number(prompt("Lütfen bir sayı giriniz:"));

// console.log(typeof kullaniciSayi);

// todo: Kullanıcıdan alınan 2 adet sayıyı toplayan bir fonksiyon oluşturunuz

function toplamaIşlemi(sayi1, sayi2) {
  let toplam = sayi1 + sayi2;

  document.write("Toplam:", toplam, "<br/>");
}

// const kullaniciSayi1 = parseInt(prompt("Sayi 1'i giriniz"));
// const kullaniciSayi2 = Number(prompt("Sayi 2'i giriniz"));

// toplamaIşlemi(kullaniciSayi1, kullaniciSayi2);

// * confirm():
// Kullanıcıdan onay almak için kullanılan bir metottur. Bu metot ile kullanıcıdan alınan veri boolean olarak döndürülür.Eğer kullanıcı "ok" seçeneğini seçerse "true" döner, "cancel" seçeneğini seçerse "false" döner.

// const yanit = confirm("Bu işlemi onaylıyor musunuz?");

// console.log(yanit);

document.write("------------------------------------------", "<br/>");

// * Javascript String Metotları

let metin =
  "                          Merhaba,Udemig akademiden selamlar.Udemig akademi'deki sıradaki konumuz Javascript.Javascript'i çok iyi öğreneceğiz,javascript ile dinamik projeler yapacağız.                ";

document.write("Metin: ", metin, "<br/>");

// ! length: Metnin uzunluğunu döndürür. Bu metot ile metnin kaç karakterden oluştuğunu öğrenebiliriz.

document.write("Metinin uzunluğu: ", metin.length, "<br/>");

// ! toLocaleUpperCase(): Metni büyük harfe çevirir.

document.write("Metin Büyük Harf: ", metin.toLocaleUpperCase(), "<br/>");

// ! toLocaleLowerCase(): Metni küçük harfe çevirir.

document.write("Metin Küçük Harf: ", metin.toLocaleLowerCase(), "<br/>");

// ! indexOf(): Metin içerisinde arama yapar. Eğer metin içerisinde aranan kelime varsa bu kelimenin ilk geçtiği yeri döndürür.

document.write(
  "Metin içerisinde javascript: ",
  metin.indexOf("javascript"),
  "<br/>"
);

document.write("Metin içerisinde udemig: ", metin.indexOf("Udemig"), "<br/>");

// ! lastIndexOf(): Metin içerisinde arama yapar. Eğer metin içerisinde aranan kelimeden birden fazla varsa bu kelimenin son geçtiği yeri döndürür.

document.write(
  "Metin içerisinde udemig: ",
  metin.lastIndexOf("Udemig"),
  "<br/>"
);

// ! slice(): Metin içerisinde belirli bir aralıktaki karakterleri döndürür. Bu metot 2 adet parametre alır. İlk parametre başlangıç indexi, ikinci parametre ise bitiş indexidir. Başlangıç indexi zorunludur ama bitiş index'i opsiyoneldir.

document.write(
  "Metin içerisindeki 10-23 arası: ",
  metin.slice(10, 23),
  "<br/>",
  "<br/>"
);

// ! concat(): Metinleri birleştirir. Bu metot ile birden fazla metni birleştirebiliriz. Bu metot ile birleştirilen metin yeni bir metin oluşturur.

const metin1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad voluptatum labore dolores quibusdam fugit, ipsum nostrum ipsa! Quaerat, porro. Ut, deserunt. Neque, officiis sed deleniti voluptas veniam mollitia eos.";
document.write(
  "Metin birleştirilmiş: ",
  metin.concat("Yusuf", "YAMAN", "HTML", "CSS", metin1),
  "<br/>",
  "<br/>"
);

// ! replace(): Metin içerisinde aranan kelimeyi değiştirir. Bu metot 2 adet parametre alır. İlk parametre aranan kelime, ikinci parametre ise değiştirilecek kelimedir.

document.write(
  "Metin içerisinde sıradaki-önümüzdeki değişimi: ",
  metin.replace("sıradaki", "önümüzdeki"),
  "<br/>",
  "<br/>"
);

document.write(
  "Metin içerisinde udemig-emaartech değişimi: ",
  metin.replace("Udemig", "Emaartech"),
  "<br/>",
  "<br/>"
);

// !replaceAll(): replace'den farklı olarak metin içerisinde aranan kelimeden birden fazla varsa bu kelimenin hepsini değiştirir.

document.write(
  "Metin içerisinde udemig-emaartech değişimi: ",
  metin.replaceAll("Udemig", "Emaartech"),
  "<br/>"
);

// ! includes(): Metin içerisinde aranan kelimenin olup olmadığını kontrol eder. Eğer metin içerisinde aranan kelime varsa "true" döner, yoksa "false" döner.

document.write(
  "Metin  udemig kelimesi var mı: ",
  metin.includes("Udemig"),
  "<br/>"
);

document.write(
  "Metin  html kelimesi var mı: ",
  metin.includes("html"),
  "<br/>"
);

// ! trim(): Metinin başındaki ve sonundaki boşlukları siler.

document.write("Metin boşlukları kaldırlmış: ", metin.trim().length, "<br/>");

// ! split(): Metni belirli bir karaktere göre böler. Bu metot 1 adet parametre alır. Bu parametre metnin hangi karaktere göre bölüneceğini belirtir.

const metin2 = "Merhaba,Nasılsın,İyimisin,Neler Yapıyorsun,Günün Nasıl Geçiyor";

document.write("Metini böl: ", metin2.split(" "), "<br/>");

document.write("------------------------------------------", "<br/>");

const ondalikliSayi = 12.3456789;

document.write("Sayi: ", ondalikliSayi, "<br/>");

// ! toFixed(): Ondalık sayının .'dan sonra kaç basamakdan oluşacığını belirlemek için kullanılır.

document.write("Sayi: ", ondalikliSayi.toFixed(1), "<br/>");

// !Math.round(): Ondalık sayıyı en yakın tam sayıya yuvarlar.

document.write(
  "Sayi En Yakın Tam Sayıya Yuvarlanmış: ",
  Math.round(ondalikliSayi),
  "<br/>"
);

// !Math.floor(): Ondalık sayıyı en yakın bir alt tam sayıya  yuvarlar.

document.write(
  "Sayi En Yakın Alt Tam Sayıya Yuvarlanmış: ",
  Math.floor(13.87678876),
  "<br/>"
);

// !Math.ceil(): Ondalık sayıyı en yakın bir üst tam sayıya  yuvarlar.

document.write(
  "Sayi En Yakın Alt Tam Sayıya Yuvarlanmış: ",
  Math.ceil(ondalikliSayi),
  "<br/>"
);

document.write(
  "Sayi En Yakın Alt Tam Sayıya Yuvarlanmış: ",
  Math.ceil(12.0000001),
  "<br/>"
);

// !Math.random(): 0 ile 1 arasında rastgele bir sayı üretir.

document.write("Rastgele Sayı: ", Math.round(Math.random() * 10), "<br/>");
document.write("Rastgele Sayı: ", Math.round(Math.random() * 99 + 1), "<br/>");

// ! parseInt(): String bir sayıyı tam sayıya çevirir.

document.write("Parse Int: ", typeof parseInt("11"), "<br/>");

document.write("------------------------------------------", "<br/>");

// * Javascript Arrays (Diziler)

// Javascript dizileri birden fazla veriyi tek bir değişkende saklamak için kullanılır.Diziler birden fazla veriyi bir arada tutması ve sahip olduğu metotlar ile bu verileri kolayca yönetmemizi sağlaması sebebiyle projelerde sıkça kullanılır.

// Bir dizi tanımlamak için let veya const anahtar kelimelerinden biri seçilir.Sonrasında diziye bir isim verilir.Verilen isim'den sonra "=" işareti koyulur ve ardından [] işaretleri koyulur.Buradaki [] içerisinde dizi elemanları yazılır.

// const öğrenci1 = "Bahmam";
// const öğrenci2 = "İnayet";
// const öğrenci3 = "Melis";

let öğrenciler = [
  "Bahmam",
  "İnayet",
  "Melis",
  "Buse",
  "Mahmut",
  "Ali",
  "Ayşe",
  "Fatma",
];

const sayılar = [1, 2, 3, 4, 5, 6];
const karmaDizi = [123, "Ali", true, undefined, null];

// Diziye erişme
document.write("Öğrenciler: ", öğrenciler, "<br/>");

// Dizi elemanına erişme
document.write("Öğrenciler dizisinin 1. elemanı: ", öğrenciler[1], "<br/>");
document.write("Öğrenciler dizisinin 4. elemanı: ", öğrenciler[3], "<br/>");
document.write("Öğrenciler dizisinin 6. elemanı: ", öğrenciler[5], "<br/>");

// Dizilerde elemanların sırası 0'dan başlar. Yani dizinin ilk elemanı 0, ikinci elemanı 1, üçüncü elemanı 2 şeklinde devam eder.Bu duruma dizlerdeki index denir.İndex kavramından ötürü bir dizinin elemanına erişmek istersek bunu erişilmek istnen elemanın 1 eksik sırasını yazarak yapabiliriz.

document.write(
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>"
);
