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

// * API:

// Bir web sitesinin temelde iki kısmı bulunur.Frontend (Ön Kısım) ve Backend (Arka Kısım).Frontend authentication,data gibi hizmetler için backende ihtiyaç duyar.Frontend ve backend arasında haberleşme işlemini api ile yaparız.Api temelde iki kısımdan oluşur:baseUrl ve endpoint.baseUrl endpointleri sarmalayan kapsayıcıdır.Endpoint'ler ise veri için özelleştirilmiş uç noktalardır.

// Backend'den gerekli verileri almak veya backend'de gönderilecek veriler için fetch metodu kullanılır.fetch kendisine verilen url'den veri çekmek veya göndermek için kullanılır.

// Server'lar kendi içerisinde 1 ve 0'lar ile haberleşir.Biz kullanıcılar ise text ile haberleşiriz.İkimiz arasında ortak bir iletişim dili oluşturmak içinse JSON kullanılır.JSON js objesine benzer bir yapıdır.Ama birebir aynı değildir.Bu yüzden api'a veri göndermek veya api'dan veri almak için elimizdeki veriyi dönüştürmemiz gerekir.

// Eğer JSON verisini JS'de kullancağımız formata çevirmek istiyorsak bu noktada JSON.parse() metodu kullanılır.

// Eğer Js'de kullanılan veriyi JSON'a çevirmek için JSON.stringify() metodu kullanılır.

// Bu iki metotda () içerisinde dönüştürülmek istenen veriyi yazmamızı ister.
