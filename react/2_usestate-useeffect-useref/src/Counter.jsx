import { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  // Javascript'de bir değerin değişmesine bağlı olarak arayüzde direkt olarak renderlama yapamayız.Ama react bu duruma bir çözüm getiriyor.React'da state'ler oluşturarak bir değerin değişmesi durumunda arayüzü renderlayabiliriz.

  // ? State Nasıl oluşturulur ?
  // Bir state oluşturmak için:
  // 1. React içerisinden useState hook'unu çağır.Bu yapı bir state oluşturmak için gereklidir.
  // 2. useState kurulumunu yap.useState kurulum için let [stateAdı,stateGüncelleyecekFonksiyon]=useState() şeklinde yapılır.Buradaki () içerisinde ise state'in başlangıç değeri yazılır.Başlangıç değeri olarak string,number,boolean,... javascript veri tipleri kullanılabilir.
  // Sonrasında stateAdı kısmında isimlendirilen state bileşen içerisinde kullanılır.Eğer state'in değerini güncellemek istersek bunu stateGüncelleyecekFonksiyon ile yaparız.

  // ? Function Component İçerisinde Lifecycle' Nasıl Kullanılır ?

  // useEffect kullanılırken:
  // 1. React içerisinden useEffect hook'unu çağırırız.
  // 2. useEffect'e bir fonksiyon birde bağımlılık dizisi veririz.
  // Eğer bağımlılık dizisi boş ise yada buradaki bağımlılık değişmediyse bu class componentlerdeki componentDidMount metoduna karşılık gelir.Ama bağımlılık dizisine bir değer verilir ve bu değer güncellenirse bu class componentlerdeki componentDidUpdate metoduna karşılık gelir.Eğer bu metot içerisine return satırı eklenirse bu class componentlerdeki componentWillUnmount metoduna karşılık gelir.

  // Bileşenin ekrana gelme anı

  // useEffect(() => {
  //   console.log(`Counter componenti ekrana geldi`);
  // }, []);

  // Bileşenin ekrana gelme anı

  // useEffect(() => {
  //   console.log(`Counter componenti güncellendi`);
  // }, [count]);

  // Bileşenin ekrandan kaldırılma anı

  // useEffect(() => {
  //   return console.log(`Counter componenti ekrandan kaldırıldı`);
  // }, []);

  useEffect(() => {
    console.log(`Counter componenti ekrana geldi // güncellendi`);

    return console.log(`Counter componenti ekrandan kaldırıldı`);
  }, [count]);

  // ! Özetle bir function component içerisinde ilgili componetin lifecycle'ını izlemek için useEffect hook'u kullanılır.Bu hook kendisine bağımlılık dizisi verilmesi,return satırı eklenmesi ile bileşenin lifecycle'ını izlememizi sağlar.
  return (
    <div className="container py-5">
      <h1 className="text-center pb-4">Counter</h1>
      <div className="w-50 m-auto d-flex align-items-center justify-content-between ">
        <button
          onClick={() => setCount(count--)}
          className="btn btn-danger px-4 fs-2"
        >
          -
        </button>
        <h1 className="fw-bold">{count}</h1>
        <button
          onClick={() => setCount(count++)}
          className="btn btn-success px-4 fs-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
