# Vite

- React projelerini oluşturmak için güncel projelerde vite kullanılır.Çünkü vite ile oluşturulan projelerde gereksiz bağımlılıklar olmaz,build süreçleri daha hızlıdır,klasik projelere göre daha performanslı çalışır ve HMR teknolojisi sayesinde projede yapılan değişiklikleri tarayıcıya daha hızlı aktarır.

- Vite ile proje oluşturmak için `npm create vite@latest projeAdı` komutu kullanılır.Bu komut yazıldıktan sonra terminalde oluşturmak istediğimiz framework seçilir ve proje oluşturulur.Vite ile oluşturulan projelerde gereksiz bağımlılıklar olmaz bunun yanında node_modules dosyasıda oluşturulmaz.Projenin ayağa kalkması için node_modules'e ihtiyaç duyduğumuzdan proje konumunda bulunan terminalde `npm i` komutu çalıştırılıp node_modules dosyası oluşturulur.Akabinde `npm run dev` ile proje ayağa kaldırılır.

# Json Server

- Bir web projesi temelde iki ana kısımdan oluşur.Bunlar:

1. Frontend (Client): Kullanıcının web sitesine girdiğinde gördüğü arayüz

2. Backend (Server): Web sitesindeki giriş-çıkış,kimlik doğrulama,raporlama,verilerin tutulması,... gibi projenin işleyişi için önemli işlemlerin yapıldığı kısımdır.

- Proje içerisinde frontend kısmını geliştiriken dahi backende ihtiyaç duyarız.Ör. tweetleri alıp ekrana renderlama,... gibi işlemler için backend ile iletişime geçeriz.Fakat projenin geliştirilmesi sürecinde her zaman bir backend hazır olmaya bilir.Bu durumda json-server kütüphanesi ile locale'mizde sahte bir backend oluşturabilir ve gerçek backend hazır olana kadar projemizi geliştirebiliriz.

# Json-Server İle Sahte Backend Nasıl Oluşturulur?

1. `npm install json-server` komutu ile kütüphanein paketini projeye indir.
2. package.json dosyası ile aynı dizinde bir `db.json` dosyası oluştur.
3. `db.json` dosyası içerisinde kullanılacak verileri kodla.
4. package.json dosyasında scripts içerisine bir script (server:`json-server --watch db.json`) yaz.Bu sayede projeyi ayağa kaldırırken uzun uzun `json-server --watch db.json` yazmak durumunda kalmayacağız.
5. package.json ile aynı dizindeki terminalde `npm run server` komutu ile sahte backendi ayağa kaldır

! Bazı durumlarda backend'in ayağa kaldırılacağı portu ayarlamamız gerekebilir.Bu durumda `json-server --watch db.json --port portNo` şeklinde backendin çalıştırılacağı portu belirleyebiliriz.Bu portun default değeri 3000'dir.

Artık proje içerisinde `http://localhost:portNo` adresine tüm http isteklerini atıp projeyi sahte backend ile geliştirebiliriz.Gerçek backend hazır olduğunda ise sadece api isteği atılan adresi güncelleyeceğiz.

- `npm install json-server@0.17.4  `

# Axios Nedir?

- Axios güncel projelerde client-server arasındaki haberleşmeyi sağlayan bir kütüphanedir.Axios ile api isteklerini daha kolay bir şekile yönetiriz.Ör client-server arasındaki haberleşme sırasına bizim yaptığımız json <-> js dönüştürmelerini kendisi otomatik yapar,api istekleri için ortak yapılar oluşturmamız ve api isteğini özelleştirebilmemizi sağlar.

- Axios'u kullanırken ilk olarak paketini `npm install axios` diyerek indirmeliyiz.Devamında axios'u import edip api istekleri için ortak yapıları kodlamalıyız.Sonrasında oluşturulan bu ortak yapı sayesine tüm http metotlarını kullanarak proje geliştirebiliriz.

# HTTP METOTLARI

- Http metotları client ve server arasındaki güvenli haberleşme için kullanılan metotlardır.Şimdi bu metotlara teker teker bakalım:

1. GET:

- Server'dan client kısmına veri çekmek için kullanılır.

2. POST:

- Server'dan client'a veri göndermek için kullanılır.

3. PUT:

- Server'dan client'daki veriyi güncellemek için kullanılır.Put ile veri güncellemesi yapılacakken tüm veri gönderilmelidir.Yani kullanıcı sadece biografi kısmını güncellese dahi tüm kullanıcı verileri gönderilmelidir.

4. PATCH:

- Server'dan client'daki veriyi güncellemek için kullanılır.Patch metodundan sadece güncellenecek verinin gönderilmesi yeterlidir.Yani kullanıcı sadece biografi kısmını güncellediğinde dahi tüm kullanıcı verileri değil sadece biografi kısmını göndermesi yeterlidir.

5. DELETE:

- Server'dan client'daki veriyi silmek için kullanılır.
