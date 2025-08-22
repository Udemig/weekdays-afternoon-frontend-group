import React, { useEffect, useState } from "react";
import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiUserAdd } from "react-icons/hi";
import api from "./api";
import Card from "./components/Card";
import Modal from "./components/Modal";
const App = () => {
  // State kurulumu
  const [contacts, setContacts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  // ! Çoklu renderlama yapılırken eğer map ile dönülen state'in undefined olma durumu varsa bu noktada hata alınır.Bu hatayı önlemek için ya map kullanılan state'in sonuna ? eklenir yada map ile dönülecek state tanımlanırken başlangıç değeri olarak boş bir dizi atanır bu sayede boş bir dizi üzerinden map ile dönüldüğünde hata alınmaz.

  // todo: Api'dan contact listesini alıp bu listedeki herbir kullanıcı için contact card render et.Bu contact card üzerinden düzenleme ve silme özellikleri aktif edilsin.Bunun yanından header içerisinde bulunan arama çubuğu ile kullanıcı araması yapılsın add button'a tıklanınca yeni bir kullanıcı oluşturmak için modal aktif edilsin.

  // Api'dan contact verisini al
  useEffect(() => {
    // Axios ile oluşturulan api yapısı üzerinden veri çekme işlemi yap
    api.get("/contact").then((res) => {
      setContacts(res.data);
    });
  }, []);

  return (
    <>
      <main>
        {/* Header */}
        <header>
          {/* Logo */}

          <h1>Rehber</h1>

          {/* Form && Buttons */}
          <div>
            {/* Form */}
            <form>
              <button className="form-button" type="submit">
                <IoIosSearch />
              </button>
              <input type="search" placeholder="kişi aratınız ..." />
            </form>
            {/* Pasife Buttons */}
            <button className="hidden-button">
              <IoMdMenu />
            </button>
            <button className="hidden-button">
              <HiMiniSquares2X2 />
            </button>
            {/* Create Button */}
            <button
              onClick={() => {
                // Modal'ı aktif et
                setIsShowModal(true);
              }}
              className="create-button"
            >
              <HiUserAdd />
              <span>Yeni Kişi</span>
            </button>
          </div>
        </header>

        {/* Contact List */}
        <div className="contacts-wrapper">
          {contacts.map((item) => (
            <Card key={item.id} contact={item} />
          ))}
        </div>
      </main>

      {/* Modal */}

      {isShowModal && (
        <Modal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          setContacts={setContacts}
        />
      )}
    </>
  );
};

export default App;
