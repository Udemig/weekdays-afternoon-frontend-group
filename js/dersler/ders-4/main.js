// * Javascript Karar Yapısı (if-else):

// Javascript'de bir koşula göre işlemler yapılmasını if-else ile sağlarız.if eğer anlamına gelir.else ise değilse anlamına gelir.

// if(){}else{} şeklinde oluşturulan yapıda () içerisinde gerekli koşul yazılır.Bu koşul sağlanırsa {} içerisindeki kod çalışır.Eğer sağlanmazsa else kısmındaki {} çalışır.

// todo: Kullanıcının yaşı 18'den büyükse "Ehliyet alabilir" değilse "Ehliyet alamaz" çıktısı veren code-script'i oluşturunuz.

let kullaniciYaş = 17;

if (kullaniciYaş >= 18) {
  document.write(`Ehliyet alabilir. <br/>`);
} else {
  document.write(`Ehliyet alamaz. <br/>`);
}

// ! Eğer koşul sağlanıyorsa if bloğu;sağlanmıyorsa else bloğu çalışır.

// todo: Öğrenci'nin dönem ortalaması 50'den küçükse "Dersten Kaldınız",50-65 arasında ise "Geçtiniz ama belge alamadınız",65-84 arasında ise "Teşekkür belgesi aldınız",85 ve üzerindeyse "Takdir belgesi aldınız" çıktısı veren code-script'i oluşturunuz.

let ortalama = 85;

if (ortalama < 50) {
  document.write(`Dersten kaldınız. <br/>`);
} else if (ortalama >= 50 && ortalama < 65) {
  document.write(`Geçtiniz ama belge alamadınız. <br/>`);
} else if (ortalama >= 65 && ortalama < 85) {
  document.write(`Teşekkür belgesi aldınız. <br/>`);
} else {
  document.write(`Takdir belgesi aldınız. <br/>`);
}

//  if  else if  else
//  +      -      -
//  -      +      +
//  -      -      +

document.write(`------------------------------------------------ <br/>`);

// ! Eğer birden fazla koşullu yapı bir arada kullanılmak isteniyorsa ilk koşul if ile kontrol edilir.Bu koşul sağlanmadığında yeni bir koşul kontrol edilmek isteniyorsa bunu else if ile yaparız.En sonki durum ise else ile kontrol edilir.

// * switch-case:

// switch-case ile bir değişkenin alacağı değerlere göre işlemler yapabiliriz.Ör. not değişkeninin değeri 1 ise "Çok Kötü",2 ise "Kötü",3 ise "Ortalama",4 ise "İyi",5 ise "Çok İyi" çıktısı verme...

// switch-case yapısında switch(değişkenAdı){case değer: çalışacakKod; case değer: çalışacakKod; case değer: çalışacakKod; } değişkenAdının değeri hangi case ile eşleşiyorsa o case içerisindeki kod çalışır.

// todo: haftanınGünü değişkeninin değeri 1 ise "Pazartesi",2 ise "Salı",... şeklinde çıktı veren code-script'i oluşturunuz.

let haftanınGünü = 8;

switch (haftanınGünü) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;

  case 2:
    document.write(`Salı <br/>`);
    break;

  case 3:
    document.write(`Çarşamba <br/>`);
    break;

  case 4:
    document.write(`Perşembe <br/>`);
    break;

  case 5:
    document.write(`Cuma <br/>`);
    break;

  case 6:
    document.write(`Cumartesi <br/>`);
    break;

  case 7:
    document.write(`Pazar <br/>`);
    break;

  default: // case değerleri ile eşleşmeyen durumlarda bu kısım çalışır
    document.write(`Tanimsiz gün <br/>`);
}

document.write(`------------------------------------------------ <br/>`);

// * Javascript Döngüler

// Javascript'de tekrar gerektiren işlemleri yapabilmek için döngüler kullanılır.

// Döngüler'de kullanılan sayaç yapısının bilinmesi döngüleri anlama noktasında yardımcı olacaktır.

let sayı = 10;

document.write(`Sayı: ${sayı} <br/>`);

// sayı = sayı + 1;
sayı++;

document.write(`Sayı-1: ${sayı} <br/>`);

// sayı = sayı + 5;
sayı += 5;

document.write(`Sayı-2: ${sayı} <br/>`);

// sayı = sayı * 5;
sayı *= 5;

document.write(`Sayı-3: ${sayı} <br/>`);

// sayı = sayı / 4;
sayı /= 4;

document.write(`Sayı-4: ${sayı} <br/>`);

// sayı = sayı - 1;
sayı--;

document.write(`Sayı-5: ${sayı} <br/>`);

document.write(`------------------------------------------------ <br/>`);

// * for döngüsü:

// for döngüsü tekrar gerektiren işlemleri daha kolay yapmak için kullanılır.Bu döngü 3 argüman ister.Birincisi bir değişken,ikincisi bir koşul,üçüncüsü ise birinci argümanı güncelleyerek döngünün devam etmesini sağlayan metot.Koşul sağlandığı müddetçe döngü devam eder.

// document.write(`Merhaba,Dünya <br/>`);
// document.write(`Merhaba,Dünya <br/>`);
// document.write(`Merhaba,Dünya <br/>`);
// document.write(`Merhaba,Dünya <br/>`);
// document.write(`Merhaba,Dünya <br/>`);

for (let sayaç = 0; sayaç < 5; sayaç++) {
  document.write(`Merhaba,Dünya <br/>`);
}

document.write(`------------------------------------------------ <br/>`);

// todo: 1'den 50'ye kadar olan sayıları ekrana yazdıran code-script'i oluşturunuz.

for (let sayı1 = 1; sayı1 <= 50; sayı1++) {
  document.write(`${sayı1} <br/>`);
}

document.write(`------------------------------------------------ <br/>`);

// * while döngüsü:

// while döngüsü bir koşulun sağlanması durumunda döngünün çalışmasını sağlar.Bizden bir koşul bu koşulun sağlanması durumunda gerekli kod çalıştırılır.

// todo: 1'den 20'ye kadar olan sayıları ekrana while döngüsü kullanarak yazdıran code-script'i oluşturunuz.

let sayı2 = 1;

while (sayı2 <= 20) {
  document.write(`${sayı2} <br/>`);

  // koşulu güncelle
  sayı2++;

  // Eğer koşul güncellenmezse döngü sonsuza kadar devam eder.Buda uygulamanın sonsuz döngüye girmesine sebep olur.Bu durum uygulamayı patlatır.
}

document.write(`------------------------------------------------ <br/>`);

// * do-while döngüsü:

// do-while döngüsü while döngüsünden farklı olarak ilk olarak çalışır sonrasında koşul kontrolü yapar.Bu sebeple koşul sağlanmasada en az bir kez çalışır.

let sayaç2 = 1;

do {
  document.write(`${sayaç2} <br/>`);

  sayaç2++;
} while (sayaç2 < 5);

document.write(`------------------------------------------------ <br/>`);

// todo:1'den 100'e kadar olan tek sayıları ekrana do-while döngüsü kullanarak yazdıran code-script'i oluşturunuz.

let sayı3 = 1;

do {
  document.write(`${sayı3} <br/>`);

  sayı3 += 2;
} while (sayı3 < 100);

document.write(`------------------------------------------------ <br/>`);

// * Javascript Dizilerde Döngüler

// Bir dizinin her elemanı için bir işlem tetiklemek için dizilerde döngü kullanılır.

// * forEach:Bir dizideki tüm elemanları dönerek herbiri için bir işlev tetiklemek için kullanılır.Dizinin tüm elemanlarını dönerek belirlenen fonksiyonu çalıştırır.

const öğrenciler = ["Ali", "Burak", "Buse", "Leyla"];

// document.write(`Hoşgeldin,${öğrenciler[0]} <br/>`);
// document.write(`Hoşgeldin,${öğrenciler[1]} <br/>`);
// document.write(`Hoşgeldin,${öğrenciler[2]} <br/>`);
// document.write(`Hoşgeldin,${öğrenciler[3]} <br/>`);

öğrenciler.forEach((öğrenci) => {
  document.write(`Hoşgeldin,${öğrenci} <br/>`);
});

document.write(`------------------------------------------------ <br/>`);

// * map:Bir dizideki tüm elemanları dönerek herbiri için bir işlev tetiklemek için kullanılır.forEach'den farklı olarak map bir dizi üzerinden döndüğünde geriye bir dizi return eder.Bu sebeple dizi elemanlarına müdahale yapma yetkinliği sağlar.

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// todo: sayilar dizisinin her bir elemanının 3 katını alan code-script'i oluşturunuz.

const yeniSayilar = sayilar.map((sayi) => sayi * 3);

document.write(`Dizi: ${sayilar} <br/>`);

document.write(`Yeni Dizi: ${yeniSayilar} <br/>`);

// ! forEach ve map metotları ile bir dizinin tüm elemanlarını dönerek bir işlem yapabiliriz.Arasındaki farksa map bir diziyi döndüğü noktada geriye yeni bir dizi döndürür.forEach ise sadece bir dizinin tüm elemanları üzerinden döner.

// * Javascript Spread Operatör

// Bir dizi veya obje'yi genişletmek için spread operatör kullanılır.

const kullanıcılar = ["Hakan", "Dila", "Buse", "Mehmet"];

const yeniKullanıcılar = [...kullanıcılar, "Kürşat", "Fatih", "Harun"]; // kullanıcılar dizisindeki tüm elemanları tut üzerine yeni elemanlar ekle

document.write(`Kullanıcılar: ${kullanıcılar} <br/>`);

document.write(`Yeni Kullanıcılar: ${yeniKullanıcılar} <br/>`);

const kullanıcı = {
  isim: "Faruk",
  soyisim: "Koç",
};

const kullanıcı1 = { ...kullanıcı, yaş: 30 }; // kullanıcı objesi içerisindeki tüm değerleri koru,üzerine yaş değeri ekle

console.log(kullanıcı);
console.log(kullanıcı1);

// ! Özetle spread operatör bir dizi veya objede mevcut değerleri koruyarak bu değerlerin üzerine yeni değerler eklemek için kullanılır.

document.write(`------------------------------------------------ <br/>`);

// * Javascript try-catch-finally Yapısı

// Javascript'de bir hata olması durumunda bu hatayı yönetmek için try-catch kullanılır.try kısmında bir işlem yapılır ve bu işlem sırasında bir hata olursa bunu catch kısmında yakalarız.

try {
  // !  throw elle hata fırlatmak için kullanılır.new Error() ise bir hata oluşturmak için kullanılır.Burada hatayı biz elle patlattık ama projelerde bu hatalar yapılcak işlem sırasında bir hata olursa otamatik olarak gerçekleşir.

  throw new Error(`İşlem sırasında hata oluştu.`);
  document.write(`İşlem gerçekleşiyor <br/>`);
} catch (error) {
  document.write(`${error} <br/>`);
} finally {
  document.write(`İşle tamamlandı <br/>`);
}

// ! Özetle: try kısmında bir işlem yapılır.Hata olması durumunda bu hata catch kısmında yakalanır.Hata olması veya olmaması durumunda en sonda çalışacak kısım ise finally kısmında kodlanır.

// * Javascript Scope Kavramı

// Scope javascript'de bir değişkenin erişilebileceği alanı ifade eder.Temelde 3 adet scope vardır.

// 1-) Global Scope: Program içerisinde her yerden erişilebilen değişkenkerin scope'dur.Program içerisinde heryerden erişilebilir.

// 2-) Function Scope: Program içerisindeki fonksiyonlar içinde tanımlanan değişkenlerin sahip olduğu scope'dur.Sadece tanımlanan function içerisinde erişilebilir.

// 3-) Block Scope: Program içerisinde bir {} içerisinde tanımlanan değişkenlerin sahip olduğu scope'dur.Sadece tanımlandığı {} içerisinde erişilebilir.

const kullaniciAdi = "Yusuf YAMAN"; // Global Scope

document.write(`Kullanıcı adı: ${kullaniciAdi} <br/>`);
function çiktiVer() {
  document.write(`Kullanıcı adı-1: ${kullaniciAdi} <br/>`);
}

çiktiVer();

if (true) {
  document.write(`Kullanıcı adı: ${kullaniciAdi} <br/>`);
}

const toplamaİşlemi = () => {
  let toplam = 4 + 3; // Function Scope

  document.write(`Toplam: ${toplam} <br/>`);
};

toplamaİşlemi();

// document.write(`Toplam: ${toplam} <br/>`); toplam değişkeni function scope'a sahip olduğundan sadece ilgili function içerisinde erişilebilir.Function dışarısınd aerişilmeye çalışılırsa hata verir.

if (4 == 4) {
  let mesaj = "Merhaba,nasılsın?";
}

// document.write(`Mesaj: ${mesaj} <br/>`); mesaj değişkeni block scope'a sahip olduğundan sadece ilgili {} içerisinde erişilebilir.{} dışarısında erişilmeye çalışılırsa hata verir.

// ! Özetle: Projede bir değişken oluşturulacağı zaman bunun nerelerde erişilebileceğine göre hangi scope'a sahip olduğunu belirlememiz gerekir.
