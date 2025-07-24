import { users } from "./constants.js";
import trimText from "./formatText.js";

// * Javascript Modüler Dosya Yönetimi

// Çok sayfalı projeler yapıldığında her sayfa için dinamik olaylar,api olayları,belirli sabitler gibi dinamik işlemlere ihtiyaç duyarız.Bunu tek bir js dosyasında yönetmek zorluklara sebep olur.Bu zorluğu aşmak için modüler dosya yönetimi kullanılır.Modüler dosya yönetimi için ilk olarak bir tane js dosyası belirlenir.Belirlenen bu dosya html'e bağlanırken script etiketine type attribute'ü verilir.Verilen bu attribute module değeri verilir.Bu sayede birden fazla js dosyası bir arada kullanılabilir.

// Modüler dosya yönetimi sırasında yapılması gereken bir diğer işlem ise bir dosya içerisinde oluşturulan değişken,fonksiyon,obje,... gibi js içerisinde bulunan kullanılmak yapıları dosya dışarısına çıkarmaktır.Bunu ise dosya dışarısına çıkarılmak istenen değeri export edip kullanılmak istenen yerde import ederek yaparız.

// ! Export-import işlemi yapılırken eğer bir dosyadan birden fazla eleman dışarı çıkarılacakken export {dosyaDışarısınaÇıkarılacakElemanlarıAdı} // import {importEdilecekElemanlarınAdı} from "dosyaYolu" kullanılır.Ama eğer bir dosyadan sadece bir değer dosya dışarısına çıkarılacaksa export işlemi export default dışarıÇıkarılacakElemanAdı diyerek import edilecekken ise import importEdilecekElemanAdı from "dosyaYolu" yazılır.

// users.forEach((user) => {
//   console.log(`Kullanıcı adı: ${user} `);
// });

// console.log(trimText("Merhaba,nasılsınız?", 10));

// * Javascript Tarih Objesi

// Javascript'de güncel tarih verisine erişmek için Date objesi kullanılır.Javascript içerisinde bulunan bu yapı kullanılacağı zaman ilk olara "new" keyword'ü ile örneği alınır.Alınan bu örnek üzerinde gerekli tarih işlemler yapılır.

const date = new Date();

console.log(`Tarih: ${date} `);

// ! getDate: Date objesi içerisinden gün verisini almak için kullanılır.

console.log(`Gün: ${date.getDate()} `);

// ! getMonth: Date objesi içerisinden ay verisini almak için kullanılır.

console.log(`Ay: ${date.getMonth() + 1} `);

// ! getFullYear: Date objesi içerisinde yıl verisini almak için kullanılır.

console.log(`Yıl: ${date.getFullYear()} `);

// ! getDay: Date objesi içerisinde o günkü günün haftanın kaçıncı günü olduğunu almak için kullanılır.

console.log(`Haftanın kaçıncı günü: ${date.getDay()} `);

// ! getHours: Date objesi içerisinden saat verisini almak için kullanılır.

console.log(`Saat: ${date.getHours()} `);

// ! getMinutes: Date objesi içerisinden dakika verisini almak için kullanılır.

console.log(`Dakika: ${date.getMinutes()} `);

// ! getSeconds: Date objesi içerisinden saniye verisini almak için kullanılır.

console.log(`Saniye: ${date.getSeconds()} `);

// ! getMilliseconds: Date objesi içerisinden milisaniye verisini almak için kullanılır.

console.log(`Milisaniye: ${date.getMilliseconds()} `);

// ! getTime: 1970'den bu yana geçen süreyi milisaniye cinsinden almak için kullanılır.

console.log(`1970 --: ${date.getTime()} `);

// !toLocaleDateString: Date objesi içerisinde yer alan tarih verisini konuma göre formatlamak için kullanılır.
console.log(
  `Tr formatında Tarih: ${date.toLocaleDateString("tr", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })} `
);

console.log(`---------------------------------------`);

// * API:

// Bir web sitesinin temelde iki kısmı bulunur.Frontend (Ön Kısım) ve Backend (Arka Kısım).Frontend authentication,data gibi hizmetler için backende ihtiyaç duyar.Frontend ve backend arasında haberleşme işlemini api ile yaparız.Api temelde iki kısımdan oluşur:baseUrl ve endpoint.baseUrl endpointleri sarmalayan kapsayıcıdır.Endpoint'ler ise veri için özelleştirilmiş uç noktalardır.

// Backend'den gerekli verileri almak veya backend'de gönderilecek veriler için fetch metodu kullanılır.fetch kendisine verilen url'den veri çekmek veya göndermek için kullanılır.

// Server'lar kendi içerisinde 1 ve 0'lar ile haberleşir.Biz kullanıcılar ise text ile haberleşiriz.İkimiz arasında ortak bir iletişim dili oluşturmak içinse JSON kullanılır.JSON js objesine benzer bir yapıdır.Ama birebir aynı değildir.Bu yüzden api'a veri göndermek veya api'dan veri almak için elimizdeki veriyi dönüştürmemiz gerekir.

// Eğer JSON verisini JS'de kullancağımız formata çevirmek istiyorsak bu noktada JSON.parse() metodu kullanılır.

// Eğer Js'de kullanılan veriyi JSON'a çevirmek için JSON.stringify() metodu kullanılır.

// Bu iki metotda () içerisinde dönüştürülmek istenen veriyi yazmamızı ister.

// * Api'a istek at
const response = await fetch("https://dummyjson.com/todos");

// Gelen veriyi json'dan js nesnesine çevir
const data = await response.json();

// Javascript'de kodlar aksi söylenmedikçe sekrondur.Yani aynı anda çalışır.Ama api'dan gelen veriye erişilecekken bunu asektron şekilde yapmamız gerekir.Bunu iki farklı şekilde yapabiliriz.

// async-await

const getUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");

  const data = await response.json();

  console.log(data);
};

// getUsers();

// promise

const getRecipes = () => {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getRecipes();

// * Javascript Class Yapısı

// Class'lar ortak yapıları bir arada toplayarak kolay bir şekilde yönetmemizi sağlayan yapılardır.

// Class yapısı "class" keyword'ü ile oluşturulur.Bu keyword yazıldıktan sonra class'a bir isim verilir.Verilen isimden sonra {} açılır.{} içerisinde class yapısının sahip olması gereken kodlar yazılır.

class Kişi {
  // Kurucu metot:constructor class yapısı çağırıldığında ilk çalışacak yapıdır.Bu yapı içerisinde class'ın sahip olacağı değerler tanımlanır ve dışarıdan gelecek değerler karşılanır.
  constructor(yaş) {
    this.isim = "İnayet";
    this.soyisim = "Aydın";
    this.yaş = yaş; // Dışarıdan gelecek değeri karşılama
  }

  isimYazdır() {
    console.log(`Kişi isim: ${this.isim}`);
  }

  soyisimYazdır() {
    console.log(`Kişi soyisim: ${this.soyisim}`);
  }
}

// class yapısından istifade edebilmek için bunun örneğini almak gerekir
const kişi = new Kişi(23);

console.log(kişi.isim);
console.log(kişi.soyisim);
console.log(kişi.yaş);

kişi.isimYazdır();
kişi.soyisimYazdır();

// * setTimeout && setInterval

// Bu metotlar zamana bağlı olarak işlemler yapabilmemizi sağlar.

// ! setTimeout ile belirli bir zaman geçtikten sonra bir işlem tetiklemek için kullanılır.Bu metot bizden bir callback function ve bir süre belirteci ister.Verilecek süre milisaniye cinsinden olmalıdır.

// setTimeout(() => {
//   alert("İşlem gerçekleşti");
// }, 4000);

// ! setInterval ile belirli zaman aralıklarında işlemler yapabiliriz.Bu metot bizden bir callback function ve bir süre belirteci ister.Verilecek süre milisaniye cinsinden olmalıdır.

// const merhaba = setInterval(() => {
//   console.log(`Merhaba`);
// }, 3000);

// setTimeout(() => {
//   clearInterval(merhaba);
// }, 15000);

// setIntreval ile yapılan bir işlemi durdurmak için clearInterval metodu kullanılır.Bu metod hangi intervali dururacağını söylememizi ister.
