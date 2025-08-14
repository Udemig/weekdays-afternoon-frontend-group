# React Hookları

- React hookları bir proje geliştirilirken bilinmesi gereken yapılardır.Bu hooklar bazıları:

# useState:

- Bir component içerisinde verilerimizi yönetmek için kullanılır.
- useState ile tutulan bir değerin değişimine bağlı olarak component tekrardan render edilir.
- useState'i kullanmak için ilk olarak react içerisinden import etmemiz gerekir.Sonrasında ise let [stateAdı,stateGüncelleyecekFonksiyon]=useState(stateBaşlangıçDeğeri) şeklinde bir kurulum yapmamız gerekir.Kurulumdan sonra bileşen içerisinde gereken yerde state kullanılır.stateGüncelleyecekFonksiyon ise nerede state'in değeri güncellenecekse çağırılır.

! useEffect'e geçmeden react'deki component türlerine bir bakalım.

- React'da iki tip component vardır.Bunlar class component ve functional component'tir.

# Class Component

- Class componentler react componentlerinin atasıdır.Kullanılan hook'lar class component içerisinde çağırılır.Günümüz projelerinde yerini function componentlere bırakmıştır.Bunun sebebi class componentleri oluştururken function componentlere göre daha fazla kod yazmamızı gerektirmesidir.Şimdi ClasComponent.jsx dosyasına gidip bir class component nasıl tanımlanır onu görelim.

- Güncel projelerde class component kullanılmaz.Ama hem lifecycle hemde react hook'larını anlamak için class component'ide inceledik.

## Lifecycle

- Bir react componentinin ekrandaki durumlarını izleyip bu anlarda bazı işlemler yapmak isteyebiliriz.Ör. componentinin ekrana gelme anında api isteği atma,component içerisinde bir değerin güncellenmesi bağlı işlemler,componentin ekrandan kaldırılması anından bazı sıfırlama işlemleri yapılsın,...

- Bu component içerisindeki anları takip etme işlemini ise şu metotlar ile yaparız.

- - componentDidMount -> Bir componentin ekrana gelme anını izlememizi sağlar.

- - componentDidUpdate -> Bir componentin güncellenme anını izlememizi sağlar.

- - componentWillUnmount -> Bir componentin ekrandan kaldırılma anını izlememizi sağlar.

## Koşullu Renderlama

- Bir elemanın belirli bir koşula göre renderlanmasına koşullu renderlama denir.Koşullu renderlama yapmak için iki yöntem vardır:

- - Ternary Opeatör (? :) -> Bu operatör bir koşulun sağlanması ve sağlanmaması durumunda ekranda render edilecek contenti belirlememizi sağlar.

- - And Opeatör (&&) -> Bu operatör bir koşulun sağlanması durumunda ekranda render edilecek contenti belirlememizi sağlar.Aksi durumda yani koşulun sağlanmaması durumunda herhangi bir renderlama işlemi yapılmaz.

! Ternary Opeatör ve And Operatörü arasındaki fark and operatörünün sadece koşulun sağlanması durumunda renderlama yapması ternary operatörün ise koşulun sağlanmaması durumunda dahi renderlama işlemi yapmasıdır.

Kullanıcı admin ise "Admin Girişi" değilse "Kullanıcı Girişi" yazdırılacaksa -> Ternary

Kullanıcının giriş bilgileri yanlışsa "Giriş Bilgisi Yanlıştır" yazdırılacaksa -> And

## Bir Componenti Dinamik Hale Getirme

- Bir react componentini dinamik hale getirmek isteyebiliriz.Ör. Users.jsx dosyasından api'dan alınan her kullanıcı için render edilen card'larda her kullanıcın değerleri o kullanıcıya özgü yapmak.
- Bunun içinse bir component'de props kullanımını öğrenmemizi gerekir.Bir component'de props kullanımı için ilk olarak component props geçmeli akabinde component içerisinde gerekli yerde propsların kullanılması gerekir.

# useEffect:

- Class Component'lerde bir componentin lifecycle'nı nasıl izleyeceğimizi gördük.Şimdi ise bir Function Component'de bileşenin lifecycle'ı nasıl izlenir onu görelim.

- Class Componentlerde lifecycle'i izlemek için kullanılan componentDidMount,componentDidUpdate,componentWillUnmount metotlarının yerini useEffect hook'u alır.Bu hook hem bileşenin ekrana gelme hem güncellenme hemde ekradan kaldırılma anını izlemek için kullanılır.

- useEffect bir bileşen içerisinde kullanılırken ilk olarak react içerisinde useEffect hook'u import edilir.Devamında useEffect kurulumu yapılır.useEffect bizden bir fonksiyon birde bağımlılık dizisi ister.Şimdi ise kod kısmında useEffect kullanımını görelim.

## Çoklu Renderlama

# useRef:
