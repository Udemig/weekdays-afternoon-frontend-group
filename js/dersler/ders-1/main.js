// * Javascript Çıktı Metotları

// 1. document.write(): Tarayıcıdaki açılır pencerenin html'deki karşılığı body'dir.Bu alanın javascript'deki karşılığı ise "document"dir.Bu kısma document.write() metodu ile çıktı verebiliriz.

document.write("Hello World", "<br/>");

// 2. console.log():Tarayıcıdaki console kısmına çıktı vermek için kullanılır.Bu metod hata tespiti,veri kontrolü ve bağlantı kontrolü için kullanılır.

console.log("Udemig");

// 3. alert():Açılır bir popup ile kullanıcıya bildirim vermek için kullanılır.

// alert("Dikkat!Bu bir uyarıdır.");

// * Javascript Değişkenler (Variables)

// Değişkenler program içerisinde değeri değişebilen ifadeleri yönetebilmek  için kullanılan yapılardır.Değişkenleri porgram içerisinde kullanırken:

// 1-) Değişken Tanımlama

// Değişken tanımlarken "var", "let" ve "const" anahtar kelimelerinden biri seçilir.Sonrasında değişkene bir isim verilir.Verilecek bu isim değişkenin içeriği ile ilintili olmalıdır.Eğer değişken adı birden fazla kelimeden oluşuyorsa bu kelimelerden ilkinin tüm harfleri küçük bundan sonra gelecek diğer kelimelerin ise sadece ilk harfi büyük olacak şekilde yazılır.(Camel Case)

// 2-) Değişken Değer Ataması Yapılmalı

// Değişkene değer ataması yapılırken atama operatörü (=) kullanılır.Bu operatör sağındaki değeri alıp solun içerisine atar.

// 3-) Değişken Program İçerisinde Kullanılmalı

var kullaniciAdı = "İnayet";

let kullaniciKimlikNo = 123454321;

const ülkeAdi = "Türkiye";

document.write("Kullanıcı Adı:", kullaniciAdı, "<br/>");
document.write("Kullanıcı TC:", kullaniciKimlikNo, "<br/>");
document.write("Ülke:", ülkeAdi, "<br/>");

// ? Neden 3 adet değişken tanımlama yöntemi var?

var projeAdi = "Move On";

document.write("Proje:", projeAdi, "<br/>");

var projeAdi = "Post App";

document.write("Proje:", projeAdi, "<br/>");

// var ile değişken tanımlarken mevcut bir değişkeni tekrardan tanımlamamıza izin verdiği için güncel projelerde kullanılmaz.

let arabaMarkasi = "BMW";

document.write("Marka:", arabaMarkasi, "<br/>");

// let arabaMarkasi = "MERCEDES"; arabaMarkasi değişkeni hali hazırda bulunduğundan ötürü tekrardan tanımlanamaz.

const yaş = 30;

document.write("Yaş:", yaş, "<br/>");

// const yaş = 45; yaş değişkeni hali hazırda bulunduğundan ötürü tekrardan tanımlanamaz.

// ? let  ve const arasındaki fark nedir?

let sayi1 = 10;

document.write("Sayi-1:", sayi1, "<br/>");

sayi1 = 20;

document.write("Sayi-1 Update:", sayi1, "<br/>");

let isim;

isim = "Yusuf";

document.write("İsim:", isim, "<br/>");

const telefonNo = 1234567890;

document.write("Telefon No:", telefonNo, "<br/>");

// telefonNo = 234543234566543; telefonNo değişkeni const ile tanımlandığı için güncellenemez.

// const kullancıAdi1 const ile tanımlanan değişkenlerin değer ataması yapılırken bir değer verilmesi zorunludur.Let'de olduğu gibi değişkenin önce tanımlanıp sonrasında değer ataması yapılması mümkün değildir.

// * Javascript Veri Tipleri:

// 1-) String: Metin veri tipidir.Bir değişkenin string veri tipinde olduğunu anlamak için değişkenin başına ve sonuna tırnak işareti koyulur.

const telefonMarkası = "Samsung";

document.write("telefonMarkası veri tipi:", typeof telefonMarkası, "<br/>");

// 2-) Number: Sayı veri tipidir.Bir değişkenin number veri tipinde olduğunu anlamak için değişkenin başına ve sonuna tırnak işareti koyulmaz direkt olarak yazılır.

const telefonFiyatı = 100000;

document.write("telefonFiyatı veri tipi:", typeof telefonFiyatı, "<br/>");

// 3-) Boolean: Mantıksal veri tipidir.True veya false değer alan değişkenlerin veri tipi boolean'dır.

const öğrenciMi = true;

document.write("öğrenciMi veri tipi:", typeof öğrenciMi, "<br/>");

// 4-) Undefined: Tanımlanmamış veri tipidir.Bir değişken tanımlanmış fakat bir değer atanmamışsa bu değişkenin veri tipi undefined'dır.

let takımAdı;

document.write("takımAdı veri tipi:", typeof takımAdı, "<br/>");

// 5-) Null: Boş veri tipidir.Bir değişken tanımlanmış ve bir değer atanmış fakat bu değer null ise bu değişkenin veri tipi null'dır.
const resimUrl = null;

// 6-) Object:

// 7-) Array:

//8-) Function:

// * Javascript Arimetik Operatörleri
let sayi2 = 50;
let sayi3 = 10;

// 1-) Toplama (+):

document.write("Toplama:", sayi2 + sayi3, "<br/>");

// 2-) Çıkarma (-):

document.write("Çıkarma:", sayi2 - sayi3, "<br/>");

// 3-) Çarpma (*):

document.write("Çarpma:", sayi2 * sayi3, "<br/>");

// 4-) Bölme (/):
document.write("Bölme:", sayi2 / sayi3, "<br/>");

// 5-) Mod Alma (%): Bir tam sayının başka bir tam  sayıya bölümünden kalanı bulma işlemidir.
document.write("Bölme:", sayi2 % sayi3, "<br/>");

// Javascript'de + operatörünün iki işlevi vardır:

// 1-) Toplama

// 2-) Birleştirme
document.write("Merhaba" + " Nasılsın" + "<br/>");

document.write(44 + " Nasılsın" + "<br/>");

document.write(44 + "44" + "<br/>");

// * Javascript Bağlaçları

// 1-) Ve (&&):

document.write((true && true) + "<br/>");
document.write((true && false) + "<br/>");
document.write((false && false) + "<br/>");
document.write("------------------" + "<br/>");

// 2-) Veya (||):
document.write((true || true) + "<br/>");
document.write((true || false) + "<br/>");
document.write((false || false) + "<br/>");

document.write("------------------" + "<br/>");

// * Javascript Karşılaştırma Operatörleri

// 1-) Küçüktür (<):
document.write((44 < 60) + "<br/>");

// 2-) Büyüktür (>):
document.write((44 > 21) + "<br/>");

// 3-) Küçük Eşittir (<=)
document.write((44 <= 44) + "<br/>");
document.write((14 <= 44) + "<br/>");
document.write((54 <= 44) + "<br/>");

// 4-) Büyük Eşittir (>=)
document.write((54 >= 44) + "<br/>");
document.write((54 >= 54) + "<br/>");
document.write((14 >= 54) + "<br/>");

// 5-) Eşittir (==)
document.write((54 == 54) + "<br/>");

// 6-) Eşit Değildir (!=)
document.write((54 != 64) + "<br/>");

document.write("54 54'e eşit mi? ", (54 == "54") + "<br/>");

// 7-) Denktir (===)
document.write("54 54'e denk mi? ", (54 === "54") + "<br/>");
