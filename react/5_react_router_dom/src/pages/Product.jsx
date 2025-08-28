import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Product = () => {
  // ! useNavigate: React router dom içerisinde bulunan link elemanının fonksiyon hali olan useNavigate ile belirli şartlar dahilinde yönlendirme işlemi yapılır.
  const navigate = useNavigate();

  // Kitap verilerini yönetmek için bir state oluştur
  const [books, setBooks] = useState([]);

  // Url'deki parametrelere erişip api'a istek at

  const [searchParams] = useSearchParams();
  useEffect(() => {
    // url deki parametrelere erişip bunları api'a gönder
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    // Bileşen ekrana geldiğinde api'a istek at
    axios
      .get("http://localhost:3030/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => {
        navigate("/notfound");
      });
  }, [searchParams]);

  // ! Burada ilgili arama parametrelerine erişip url'e bunları başarılı bir şekilde geçtik fakat sayfa yenilenene kadar bu parametreye bağlı olarak api isteği gerçekleşmedi.Bunun sebebi api isteğinin bileşenin ekrana geldiği anda yapılmasıydı.Bizde useEffect hookuna bir bağımlılık dizisi vererek bu bileşenin güncellenmesi anında da api isteği attık.

  // ! Kullanılan json-server api'ı bize sıralama özelliği sunmaktadır.Bunu yaparken bizden bir sıralama değeri ister.Bunuda select alanından alınan değer ile verdik.

  // asc ==> Azalan
  // desc ==> Artan

  return (
    <div className="container my-5">
      {/* Bulunan kitaplar  */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-2 text-center">
          Aratılan kitap bulunmadı !!
        </h3>
      ) : (
        <h3>{books.length} kitap bulundu</h3>
      )}

      {/* Filtreleme alanı */}
      <Filter />
      {/* Kitaplar Alanı */}
      <div className="cards-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Product;
