# React Nedir ?

- React, Facebook tarafından geliştirilen ve açık kaynaklı bir JavaScript kütüphanesidir.React ile birlikte daha performanslı web siteleri oluştururuz.

# Bir React Projesi Nasıl Oluşturulur ?

- Bir react projesi proje oluşturulmak istenen dizine konumlandıktan sonra `npx create-react-app [projeAdı]` komutu ile oluşturulur.Bu komut ile birlikte [projeAdı] kısmına yazılan isimde bir react projesi oluşturmuş oluruz.

- Bir react projesi oluşturulduğunda bir dosya template'i gelir.Bu template içerisinde yer alan dosyaların ne işe yaradığını bilmek önemlidir.

# React Dosya Dizini

1. `node_modules`: React projesinin ayağa kalkması için gerekli olan paket bağımlılıklarını tutan dosyadır.Projenin en büyük dosya boyutuna sahip dosyasıdır.Bu dosya içerisine elle müdahelede bulunmayacağız.Yeni paket indirme,paket sürümü güncelleme işlemlerinin tamamını terminalde komutlar aracılığıyla yapacağız.Bu dosya react projesi github'a yüklendiğinde githuba gönderilmeyecektir.Eğer githuba yüklenen proje githubdan çekilirse bu dosya package.json'da yazılı olan bağımlılıklara göre yeniden oluşturulacaktır.

2. `public`: React projesi içerisinde herkes tarafından erişilebilir asetlerin tutulduğu dosyadır.Favicon,images,... gibi dosyalar bu dizinde yer alır.

3. `src`:

4. `.gitignore`: Githuba bir proje yüklediğimizde bu dosya içerisinde ismi yazılı olan dosyalar githuba yüklenmeyecektir.Hassas bilgilerin,büyük dosyaların ismi bu dosya içerisinde yazılır.

5. `package.json`: React projesinin bağımlılıklarının ve projenin ile alakalı komutların yazılı olduğu dosyadır.

6. `package-lock.json`: package.json dosyası gibi paket bağımlılıklarını tutar ama bu bağımlılıkları daha spesifik [node sürümü,npm sürümü,...] veriler eşliğinde tutar.
