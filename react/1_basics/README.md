# React Nedir ?

- React, Facebook tarafından geliştirilen ve açık kaynaklı bir JavaScript kütüphanesidir.React ile birlikte daha performanslı web siteleri oluştururuz.

# Bir React Projesi Nasıl Oluşturulur ?

- Bir react projesi proje oluşturulmak istenen dizine konumlandıktan sonra `npx create-react-app [projeAdı]` komutu ile oluşturulur.Bu komut ile birlikte [projeAdı] kısmına yazılan isimde bir react projesi oluşturmuş oluruz.

- Bir react projesi oluşturulduğunda bir dosya template'i gelir.Bu template içerisinde yer alan dosyaların ne işe yaradığını bilmek önemlidir.

# React Dosya Dizini

1. `node_modules`: React projesinin ayağa kalkması için gerekli olan paket bağımlılıklarını tutan dosyadır.Projenin en büyük dosya boyutuna sahip dosyasıdır.Bu dosya içerisine elle müdahelede bulunmayacağız.Yeni paket indirme,paket sürümü güncelleme işlemlerinin tamamını terminalde komutlar aracılığıyla yapacağız.Bu dosya react projesi github'a yüklendiğinde githuba gönderilmeyecektir.Eğer githuba yüklenen proje githubdan çekilirse bu dosya package.json'da yazılı olan bağımlılıklara göre yeniden oluşturulacaktır.

2. `public`: React projesi içerisinde herkes tarafından erişilebilir asetlerin tutulduğu dosyadır.Favicon,images,... gibi dosyalar bu dizinde yer alır.

3. `src`: React projesi içerisinde geliştirmenin yapıldığı dosyadır.Bu dosya içerisinde yeni dosyalar oluşturacağız.Ama mevcut dosyalar ne işe yarıyor birlikte bakalım.

- App.css: App bileşeni içerisinde bulunan elemanların stillendirildiği css dosyasıdır.

- App.js: Bir react projesi içerisinde arayüzde renderlanacak elemanların yazıldığı dosyadır.

- index.css: Bir react projesi içerisinde genel stillendirilmelerin yapıldığı css dosyasıdır..

- index.js: Bir react projesinin ana dosyasıdır.Bu dosya html dosyası içerisinde yer alan #root olan elemanı alıp bunun içerisine App bileşeni içerisindeki elemanları render eder.

1. `.gitignore`: Githuba bir proje yüklediğimizde bu dosya içerisinde ismi yazılı olan dosyalar githuba yüklenmeyecektir.Hassas bilgilerin,büyük dosyaların ismi bu dosya içerisinde yazılır.

2. `package.json`: React projesinin bağımlılıklarının ve projenin ile alakalı komutların yazılı olduğu dosyadır.

3. `package-lock.json`: package.json dosyası gibi paket bağımlılıklarını tutar ama bu bağımlılıkları daha spesifik [node sürümü,npm sürümü,...] veriler eşliğinde tutar.

# Bir React Projesi Nasıl Ayağa Kaldırılır ?

- Bir react projesinin ayağa kaldırılması için terminalde `npm start` komutu çalıştırılır.Fakat bu komutu çalıştırılırken terminal dizinin package.json dosyası ile aynı dizinde olmalıdır.

# React Bileşen Yapısı Nedir,Bir React Bileşeni Nasıl Oluşturulur ?

- React bileşen (component) tabanlı bir mimariye sahiptir.React bileşenleri kod tekrarını ve kod yönetimini kolayca yapmamızı sağlar.

- Bir react bileşeni oluşturmak için ilk olarak src klasörü içerisinde VSCODE dosya oluştur sekmesinden bir dosya oluşturmamız gerekir.Bu dosyayı oluştururken dosya isminin ilk harfi büyük olmalıdır.(Ör.Header,Footer,Card,...)Oluşturulan bu dosya jsx uzantılı olmalıdır.

- Bir react bileşeni temelinde bir html içeriği render return eden javascript fonksiyonudur.
- İlk olarak klasik veya arrow function oluştururuz.Oluşturulan fonksiyona isim olarak bileşenin adı verilir.İçerisinde ise return satırından html içeriği kodlanır.
- Eğer bir react bileşeni içerisinde değişken,dizi,obje,... gibi javascript yapıları tanımlanacaksa bunu bileşen içerisinde return satırı dışarısında kodlanır.Bileşen içerisinde bir javascript yapısı kullanılacaksa bunu {} içersinde yaparız.
- Bir jsx bileşeni içerisinde addEventListener eklenecekse bunu addEventListener eklemek istenilen elemana onClick,onBlur,onSubmit,onDrag,.. yazıldıktan sonra {} içerisinde çalıştırılmak istenen fonksiyonu yazarız.
- İlgili bileşenin ekrana render edilmesi için App.jsx içerisinde çağırılması gerekir.Çağırabilmek içinse ilk olarak bileşen içerisinde export işlemi sonrasında ise App.jsx içerisinde import işlemi yapılmalıdır.

# JSX Nedir ?

- JSX(Javascript XML) react'a özgü bir yapıdır.Bu yapıda tek bir dosya içerisinde hem html hemde js kodu yazabiliyoruz.

- JSX dosyası içerisinde hem html hemde js kodu yazacağımızı söyledik.Bunu yaparken dikkat etmemiz gereken bazı husular vardır.İlk olarak Html yazarken .html dosyası içerisindeki yazımdan farklarına bir bakalım.

# JSX Ve HTML Farkı

- Html elemanlarını css'de stillendirmek için class ataması yaparız.Fakat bunu jsx dosyası içerisinde yaparken class yerine className kullanmamız gerekir.

- Html'de input ve label ikililerini eşlemek için kullanılan for attribute'ü jsx dosyası içerisinde htmlFor olarak kullanılır.

- Html'de kapanış etiketi olmayan bazı etiketler bulunur.Ör. input,img,br,... Bu etiketler self-closing olarak adlandırılır.Self closing etiketlerin sonuna html'de / koymamız bir sıkıntı yaratmazken jsx dosyası içerisinde sıkıntı yaratır.Bu sebeple jsx dosyası içerisinde self-closing etiketler kullanırken sonuna / koymamamız gerekir.

- Jsx dosyası içerisinde yer alan elemanların hepsinin bir kapsayıcısı bulunmalıdır.Eğer kapsayı bulma noktasında sıkıntı yaşarsak bunu jsx'e özgü boş fragment (<></>) kullanabiliriz.

# JSX Dosyası İçerisindeki Elemanların Stillendirilmesi

- Bir react bileşeni içerisinde yer alan elemanları stillendirirken

1. İnline Stillendirme: Bir bileşeni satır içerisinde stillendirme yöntemidir.Html'deki inline stillendirmeden farklı olarak style={} içerisinde {} oluştururak stillendirme yapılır.İçerideki {} içerisinde verilmek istenen still özellikleri camelCase'e uygun olarak yazılır.Ör. backgroundColor,fontSize,... Bu still özelliklerinin karşılığı metin ifade ise "" içerisinde yazacağız ama number ise bunları "" kullanmadan direkt olarak yazacağız.

2. External Css: Bir bileşeni bileşen dışarısındaki css dosyalarında stillendirme yöntemidir.Bu yöntemde oluşturulan harici css dosyalarında stillendirme işlemi yapılır.Verilen stillerin aktif edilmesi içinse bileşen içerisinde bu css dosyasının yolu belirtilerek import edilir.

3. Harici Kütüphane Kullanarak Stillendirme:Bir react bileşenini stillendirirken bu işlemi harici bir stillendirme kütüphanesi kullanarak yapma işlemidir.Bu noktada ilk olarak bootstrap kullanımını göreceğiz.Bir projede bootstrap kullanarak stillendirme yapabilmek için ilk olarak react projesine bir kütüphane nasıl kurulur onu öğrenelim:

# React Projesine Nasıl Kütüphane Kurulur?

- Bir react projesine kütüphane kurmak için ilk npm'e ihtiyaç duyarız.npm (node package manager) paket yönetimi sağlayan bir yöneticidir.Bilgisayara node.js kurulduğunda npm'de otomatik olarak kurulur.

- Bilgisayarımıza npm'i indirdikten sonra artık paket kurulumuna geçebiliriz.Paket kurulumu için package.json ile aynı dizine konumlanmış bir terminalde `npm install [kütüphaneAdı]` komutu çalıştırılır.Bu komutta yazılan [kütüphaneAdı] kısmındaki paket react projesine kurulacaktır.Bu komut yerine `npm i [kütüphaneAdı]` komutu da kullanılabilir.

- İndirilecek paketlerin bazı sürümleri vardır.Çünkü ilgili kütphaneler kendini geliştirir ve geliştirme yapıldıkça ortaya yeni sürümler çıkar.Yukarıda bahsettiğimiz `npm install [kütüphaneAdı]` veya `npm i [kütüphaneAdı]` komutları ile o kütüphanenin en son sürümü indirilir.Ama bazen illa spesifik bir sürümü indirmek isteyebilir.Bu durumda ise `npm install [kütüphaneAdı]@sürümNo` veya `npm i [kütüphaneAdı]@sürümNo`
  komutu çalıştırılır.

- İndirilen bir paketin sürümünü güncellemek istersek o noktada yine `npm install [kütüphaneAdı]@sürümNo` veya `npm i [kütüphaneAdı]@sürümNo` komutları kullanılır.
