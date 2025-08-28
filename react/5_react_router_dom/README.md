# React Components

- React component temelli bir yapıya sahiptir.Bu sebeple çokca component oluşturmamız gerekir.Bu zahmetli süreci daha kolay yapabilmek için `ES7+ React/Redux/React-Native snippets` eklentisini kullanacağız.

- Oluşturulan componentleri kullanmak için import etmemiz gerekir.Bu işlemi kolay şekilde yapmak içinse `Auto Import` eklentisi kullanacağız.

# React Router Dom

- React Router Dom kütüphanesi react'ın SPA mantalitesine uygun şekilde route'ları ifade etme imkanı sağlayan bir kütüphanedir.Bu kütüphane sayesinde hem çok sayfalı projeleri çok kolay bir şekilde yönetebilir sayfalar arasında kolay bir şekilde geçiş yapabiliriz.

# Route:

- Her rota için url'e bağlı olarak render edilecek sayfayı belirler.

# Routes:

- Tarayıcıdaki url değişimini tespit ederek route'lardaki path değeleriyle eşleşen sayfaların render edilmesini sağlar.

# Link:

- Proje içerisinde a etiketinin görevini üstlenir.Fakat Link SPA a uygun olarak bu işlemi sayfa yenilemeden yapar.

# NavLink:

- Link etiketi gibi yönlendirme yapar.Ekstra olarak mevcut sayfadaki linke active classı atar.Bu sayede ilgili link stillendirilebilir.

# useParams:

- url'deki parametrelere erişme olanağı sağlar.

# Dynamic Routes:

- Sayfa içeriğinin url'e göre değiştiği sayfalardır.useSearchParams ile iligli url'i kontrol ederek urle bağlı renderlama yapılır.

# useSearchParams:

- url'deki paramterelere erişme,urli güncelleme yetkinliği sağlayan bu yapı sayesinde dynamic route lar oluşturulur.Bu metot içerisinde bulunan get ve set yapılarıyla url üzerinde işlem yapmamıza olanak tanır.

# useNavigate:

- Link etiketiyle yapılan sayfa yönlendirmesini yapan bir fonkisyondur.

# Nested Routes:

- Bir kapsam eleman içerisinde farklı yapılar oluşturmamıza Nested routes denir.

- Bu özellik sayesinde sadece belirtilen sayfalar için ortak özellik geliştirilir.
