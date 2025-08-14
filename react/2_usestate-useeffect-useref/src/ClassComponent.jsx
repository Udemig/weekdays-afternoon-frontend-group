import { Component } from "react";

// Bir class component oluştururken ilk olarak react içerisinde yer alan ve component oluşturumamızı sağlayan Component'i import ederiz.Sonrasında class keyword'ü devamında class component'in adı yazılır.Class component'e verilen isimden sonra extends keyword ile Component'i miras alırız.
class ClassComponent extends Component {
  // Kurucu Metot
  constructor(props) {
    super(props);

    // Class Component içerisinde state oluşturmak için:
    // 1. constructor içerisinde this.state ={} şeklinde bir kurulum yapılır.
    // 2. Yapılan kurulumdan sonra {} içerisinde tutulmak istenen değerler yazılır.

    this.state = {
      isim: "Yusuf",
      soyisim: "YAMAN",
      yaş: 23,
      hobiler: ["Yazılım", "Kitap Okuma", "Spor", "Müzik"],
      count: 0,
    };
  }

  // Bir componentin ekrana gelme anını izlemek için componentDidMount metodu kullanılır.
  componentDidMount() {
    console.log(`ClassComponent bileşeni ekrana geldi.`);
  }

  // Bir componentin güncellendiği anı izlemek için componentDidUpdate metodu kullanılır.

  componentDidUpdate() {
    console.log(`ClassComponent bileşeni güncellendi.`);
  }

  // Bir componentin ekrandan kaldırıldığı anı yakalamak için componentWillUnmount metodu kullanılır.
  componentWillUnmount() {
    console.log(`ClassComponent bileşeni ekrandan kaldırıldı.`);
  }

  // ! Özetle bir bileşenin yaşam döngüsünü izlemek için lifecycle metotları kullanılır.Bu metotlar componentin ekrana gelme, güncellenme ve ekrandan kaldırılma anlarını izlememizi ve uygun işlemleri yapmamızı sağlar.

  // Renderlama yapacak metot
  render() {
    return (
      <div className="container my-5 py-3">
        <h1>Selamlar,{this.state.isim} </h1>
        <h1>Selamlar,{this.state.soyisim} </h1>

        <div className="d-flex align-items-center justify-content-between w-50 m-auto mt-5 p-3">
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
            className="btn btn-danger"
          >
            -
          </button>

          <h2>{this.state.count} </h2>

          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="btn btn-success"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

// Oluşturulan Class Component'i Dosya Dışına Çıkar
export default ClassComponent;
