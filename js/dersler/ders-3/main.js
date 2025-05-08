// * Javascript Dizi Metotları

// Dizideki elemanların daha kolay yönetilebilmesi için bazı metotlar vardır.

const şehirler = ["Malatya", "Ankara", "Hatay", "İstanbul"];

document.write("Şehirler:", şehirler, "<br/>");

// ! push() ==> Bir dizinin sonuna eleman eklemek için kullanılır.Bu metot () içerisinde diziye eklenecek elemanları yazmamızı ister.
şehirler.push("Kahramanmaraş");

document.write("Şehirler-1:", şehirler, "<br/>");

// ! pop() ==> Bir dizinin son elemanını diziden kaldırmak için kullanılır.
şehirler.pop();

document.write("Şehirler-2:", şehirler, "<br/>");

// ! unshift() ==> Bir dizinin başına eleman eklemek için kullanılır.Bu metot () içerisinde diziye eklenecek elemanların yazılmasını ister.
şehirler.unshift("Konya");

document.write("Şehirler-3:", şehirler, "<br/>");

// ! shift() ==> Bir dizinin başındaki elemanı diziden kaldırmak için kullanılır.
şehirler.shift();

document.write("Şehirler-4:", şehirler, "<br/>");

// ! slice() ==> Bir dizinin belirli bir aralığını almak için kullanılır.Bu metot bizden 2 argüman ister.Birincisi alınacak aralığının dizinin kaçıncı index'inden başlayacağı ;ikincisi ise alınacak aralığın kaçıncı index'deki elemana kadar alınacağıdır.Buradaki birinci argüman zorunludur ikincisi ise opsiyonel'dir.Yani ikincisi verilmesede olur.Verilmediği durumda dizi sonuncu index'ine kadar olan tüm elemanları alır.

document.write("Şehirler 1-3. elemanları:", şehirler.slice(0, 3), "<br/>");

// ! length ==> Bir dizinin kaç elemandan oluştuğunu belirlemek için kullanılır.

document.write("Şehirler dizisinin uzunluğu:", şehirler.length, "<br/>");

// ! indexOf() ==> Bir dizi içerisinde bir elemanın kaçıncı index'de bulunduğunu tespit etmek için kullanılır.Bu metot bizden aranacak elemanın hangisi olduğunu belirtmemizi ister.

document.write(
  "Şehirler dizisi içerisinde Ankara:",
  şehirler.indexOf("Ankara"),
  "<br/>"
);

şehirler.push("Kütahya");
şehirler.push("Kütahya");
şehirler.push("Kütahya");

document.write("Şehirler-5:", şehirler, "<br/>");

document.write(
  "Şehirler dizisi içerisinde Kütahya:",
  şehirler.indexOf("Kütahya"),
  "<br/>"
);

// ! Bir dizi içerisinde bir eleman birden fazla kez bulunuyorsa indexOf metodu bu elemanlardan ilkinin index'ini döner.Ama indexOf yerine lastIndexOf metodu kullanılırsa bu birden fazla olan elemanlardan sonuncusunun index'ini döner.

document.write(
  "Şehirler dizisi içerisinde Kütahya:",
  şehirler.lastIndexOf("Kütahya"),
  "<br/>"
);

// ! reverse() ==> Bir diziye takla attırmak için kullanılır.Yani bir diziyi ters çevirir.

document.write("Şehirler dizisi ters:", şehirler.reverse(), "<br/>");

// ! concat() ==> Bir dizi ile başka bir diziyi birleştirmek veya bir diziye bir eleman eklemek için kullanılır.

document.write(
  "Şehirler-6:",
  şehirler.concat([1, 2, 3, 4], "Selam", "Nasılsın"),
  "<br/>"
);

// ! join() ==> Bir dizinin elemanlarını belirtilen ayıraca göre bölmek için kullanılır.Bu metot belirtilen ayıraca göre elemanları böler ve geriye tek bir string değer döndürür.

document.write("Şehirler-7:", şehirler.join(" // &"), "<br/>");

// ! sort() ==> Bir dizi elemanlarını sıralamak için kullanılır.Bu metot string ifadelerde sıralama yaparken herhangi bir sıkıntı yaratmazken sayılarda sıralama yaparken sadece sayının ilk basamağına göre sıralama yaptığından hatalı çalışır.Bu hatayı düzeltmek için ilgili metot içerisinde bir fonksiyon tanımlanır.

document.write("Şehirler Sıralı A-Z:", şehirler.sort(), "<br/>");

// Metinlerde sayılarda olduğu gibi bir fonksiyon yazılamayacağından sort ile sıralanan dizi reverse ile takla attırılır.Bu sayede z-a sıralama yapılmış olur.
document.write("Şehirler Sıralı Z-A:", şehirler.sort().reverse(), "<br/>");

const sayılar = [1, 23, 44, 56, 789, 1234, 5373, 47010, 8329282];

document.write("Sayılar: ", sayılar, "<br/>");

document.write("Sayılar Sıralı Hatalı: ", sayılar.sort(), "<br/>");

document.write(
  "Sayılar Sıralı Doğru [Artan]: ",
  sayılar.sort(function (a, b) {
    return a - b;
  }),
  "<br/>"
);

document.write(
  "Sayılar Sıralı Doğru  [Azalan]: ",
  sayılar.sort(function (a, b) {
    return b - a;
  }),
  "<br/>"
);

document.write("--------------------------------------------", "<br/>");

const kişiler = ["Ali", "Ayşe", "Mehmet", "Murat", "Buse", "Melis"];

// ! splice() ==> Bir diziye eleman ekleme,silme ve dizideki bir elemanı güncelleme işlemleri yapabilen çok yönlü bir metottur.

document.write("Kişiler:", kişiler, "<br/>");

// * splice() metodu ile diziden eleman kaldırma

// splice metodu ile bir diziden eleman kaldırmak için bu metoda iki adet değer girilir.Bunlardan ilki kaçıncı index'ten itibaren eleman silineceği ikinci değer ise diziden kaç elemanın silineceğidir.Diziden silinen elemanları geri döndürür.Döndürülen elemanları bir diziye aktararak kullanabiliriz.

const silinenKişiler = kişiler.splice(2, 1);

document.write("Kişiler-1:", kişiler, "<br/>");

document.write("Silinen Kişiler:", silinenKişiler, "<br/>");

// * splice() metodu ile diziye bir eleman ekleme

// splice metodu ile diziye eleman eklemek için ilk olarak kaçıncı index'den itibaren eleman ekleneceğinin index'i belirtilir.İkinci değer olarak 0 yazılır.Üçüncü değer olaraksa eklenecek elemanların yazılmasını gerekir.Eğer birden fazla eleman eklenecekse bu elemanların sayısı kaç tane eklenecekse o adette yazılır.

kişiler.splice(3, 0, "Kutay", "Yasin");

document.write("Kişiler-2:", kişiler, "<br/>");

// * splice() metodu ile dizideki bir elemanı güncelleme

// splice metodu ile dizide güncelleme işlemi yapabilmek için bu metoda birinci değer olarak kaçıncı index'ten itibaren eleman güncelleneceği,ikinci değer olarak kaç elemanın güncelleneceğinin sayısı ve devamında güncellenecek elemanların yazılmasını ister.

kişiler.splice(4, 2, "Hilal", "Yasemin");

document.write("Kişiler-3:", kişiler, "<br/>");

/*
* splice metodu bir diziye eleman ekleme,diziden eleman kaldırma ve bir dizideki elemanları güncelleme işlemi yapabilmemizi sağlar.

! Eğer silme işlemi yapılacaksa --> splice(index,deleteCount) yazılır.Belirtilen index'ten itibaren deleteCount kadar eleman silinir.

! Eğer ekleme işlemi yapılacaksa --> splice(index,0,items) yazılır.Belirtilen index'ten itibaren belirtilen items'lar diziye eklenir.

! Eğer güncelleme işlemi yapılacaksa --> splice(index,updateCount,updateItems) yazılır.Belirtilen index'den itibaren updateCount kadar eleman updateItems 'lar ile güncellenir.


*/

// * Javascript Objeler

// Objeler içerisinde key-value değer çiftleri halinde verilen tutan yapılardır.Objeler içerisinde string,number,boolean,array,function gibi yapılar tutabilir.

// Bir obje let veya const anahtar kelimelerinden biri yazılıp devamında objeye bir isim verildikten sonra ={} oluşturularak tanımlanır.{} içerisinde key-value değer çiftleri halinde yapılar oluşturulur.

let adres = {
  il: "Malatya",
  ilçe: "Battalgazi",
  mahalle: "Yeni mahalle",
  postaKodları: [44050, 44123, 44321],
  plakaNo: 44,
  şehirTanıt: function () {
    console.log("İl:", this.il, " İlçe:", this.ilçe);
  },
  // Bir obje içerisindeki bir yapıda objenin içerisindeki bir değere erişmeye çalıştığımızda bu değerin obje içerisinde olduğunu belirtmememiz durumunda referans hatası verir.Bunu engellemek içinse erişilmek istenen değerin başına "this" keyword'ü konulur.
};

// Objeye erişme
// console.log(adres);

//  Obje içerisindeki değere erişme
// console.log(adres.il);

// console.log(adres.postaKodları);

// console.log(adres.postaKodları[0]);

// adres.şehirTanıt();

// * Bir dizi içerisinde obje tanımlama

const öğrenciler = [
  {
    id: 1,
    isim: "Faruk",
    soyisim: "Kara",
    puan: 12,
    meslek: "Frontend Developer",
  },
  {
    id: 2,
    isim: "Ayşe",
    soyisim: "Yılmaz",
    puan: 85,
    meslek: "Backend Developer",
  },
  {
    id: 3,
    isim: "Mehmet",
    soyisim: "Demir",
    puan: 47,
    meslek: "Full Stack Developer",
  },
  {
    id: 4,
    isim: "Zeynep",
    soyisim: "Koç",
    puan: 93,
    meslek: "UI/UX Designer",
  },
  {
    id: 5,
    isim: "Ali",
    soyisim: "Çelik",
    puan: 66,
    meslek: "Mobile Developer",
  },
  {
    id: 6,
    isim: "Elif",
    soyisim: "Aslan",
    puan: 74,
    meslek: "DevOps Engineer",
  },
  {
    id: 7,
    isim: "Can",
    soyisim: "Aydın",
    puan: 58,
    meslek: "Data Scientist",
  },
  {
    id: 8,
    isim: "Fatma",
    soyisim: "Güneş",
    puan: 39,
    meslek: "AI Engineer",
  },
  {
    id: 9,
    isim: "Burak",
    soyisim: "Kurt",
    puan: 91,
    meslek: "Software Tester",
  },
  {
    id: 10,
    isim: "Seda",
    soyisim: "Yıldız",
    puan: 39,
    meslek: "System Analyst",
  },
];

console.table(öğrenciler);

// ! find() ==> Bir dizi içerisinden bir elemanı bulmak için kullanılır.Bu metot () içerisinde bulunacak elemanın hangi şarta göre bulunacağını bir fonksiyon ile söylememizi ister.Tüm diziyi döner ve kendisine verilen fonksiyon'daki şartı sağlayan elemanı bir obje şeklinde döner.

// todo: öğrenciler dizisi içerisinde puanı 39 olan kullanıcıyı bul

const öğrenci1 = öğrenciler.find(function (öğrenci) {
  return öğrenci.puan == 39; // Öğrenci puanı 39 ise bunu return et
});

console.log(öğrenci1);

// ! filter() ==> Bir dizi içerisindeki elemanları filtrelemek için kullanılır.Bu metot () içerisinde elemanların hangi şarta göre filteleneceğini bir fonksiyon ile söylememizi ister.Tüm diziyi döner ve kendisine verilen fonksiyondaki şartı sağlayan elemanları bir dizi şeklinde döner.

// todo: öğrenciler dizisi içerisinden puanı 39 olan öğrencileri bul

const öğrenciler1 = öğrenciler.filter(function (öğrenci) {
  return öğrenci.puan === 39; // Öğrenci puanı 39 olan öğrencileri return et
});

console.log(öğrenciler1);

// * Özetle bir dizi içerisinde bir şarta bağlı olarak eleman bulmak için find veya filter metodu kullanılır.find geriye bir obje döndürür;filter ile geriye bir dizi döndürür.Filter birden fazla elemanı geri döndürürken find sadece bir elemanı geri döndürür.

document.write("--------------------------------------------", "<br/>");

// * Javascript Template Literals (Backtick)

// Değişken ve string ifadelerin bir arada kullanılması için bu yapıların "," ile birbirinden ayrılması gerekir.Bu durum değişken ve string ifadelerin bir arada kullanılması durumunda zor bir yazım şekli ortaya çıkarır.Bu durumun önüne geçmek için template literals (backtick) kullanılır.`` ler içerisinde değişken yazmak için ${} kullanılır;string ifadeler ise direkt olarak yazılır.

const kullaniciAdi = "İnayet";
const kullaniciSoyadi = "Aydın";

document.write(
  kullaniciAdi,
  " ismindeki;",
  kullaniciSoyadi,
  " soyadındaki öğrencimiz geleceğin başarılı developer'larındaır.",
  "<br/>"
);

document.write(
  `${kullaniciAdi}  ismindeki;${kullaniciSoyadi} soyadındaki öğrencimiz geleceğin başarılı developer'larındaır. <br/>`
);

// * Javascript Arrow Functions

// Javascript'in en güncel sürümü ES6 ile birlikte fonksiyon tanımlama yöntemidir.Bu fonksiyonlar daha kısa ve call-back function [filter,find,... gibi metotlar için kullanılan fonksiyon] tanımlamaya daha uygundur.

// Arrow function tanımlarken ilk olarak let veya const anahtar kelimelerinden biri seçilir.Sonrasında fonksiyona bir isim verilir.Verilen bu isimden sonra =()=>{} oluşturulur.Buradaki {} içerisinde fonksiyonun yapması istenen işlev herneyse o kodlanır.

const çiktiVer = () => {
  document.write(`Merhaba,nasılsınız? <br/>`);
};

çiktiVer();

const toplama = (a, b) => {
  document.write(`Toplam: ${a + b} <br/>`);
};

toplama(3, 4);

// const ortalamaHesapla = (a, b) => {
//   const ortalama = (a + b) / 2;

//   return ortalama;
// };

const ortalamaHesapla = (a, b) => (a + b) / 2; // Arrow function'lar bir değeri return edecekse ve eğer bu return işlemini tek satırda yapabiliyorsa {} ve return keyword'ü kullanmadan yapılır.

document.write(`Ortalama: ${ortalamaHesapla(10, 20)} <br/>`);
