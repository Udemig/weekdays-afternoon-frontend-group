import React from "react";
import { IoClose } from "react-icons/io5";
import Field from "./Field";
import api from "../api";
const Modal = ({ isShowModal, setIsShowModal, setContacts }) => {
  // Modal içerisindeki form gönderildiğinde çalışacak fonksiyon

  const handleSubmit = async (e) => {
    // Form gönderildiğinde sayfa yenilemesini engelle
    e.preventDefault();

    // Formun içerisindeki inputların değerlerine eriş
    // Javascript içerisindeki formData sayesinde form içerisindeki birden fazla inputa daha kolay bir şekilde erişebiliriz.
    const formData = new FormData(e.target);

    // formData ile erişilen değerleri önce entries metodu ile bir diziye çevirdik sonrasında ise Object.fromEntries ile bu diziyi objeye çevir

    const newContact = Object.fromEntries(formData.entries());

    // Oluşturula yeni kullanıcı objesi ile api'a istek at.Eğer istek başarılı olursa oluşturulan kullanıcıyı contacts stateine aktar

    api
      .post("/contacts", newContact)
      .then((response) => {
        // Api'dan gelen kullanıcı verisini contacts state'ine aktar
        setContacts((contacts) => [...contacts, response.data]);
      })
      .catch((err) => {
        alert("Yeni kişi oluşturma sırasında bir hata oluştu", err);
      });

    // Modal'ı kapat
    setIsShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        {/* Modal Head */}
        <div className="modal-head">
          <h2>Yeni Kişi Ekle</h2>

          <button onClick={() => setIsShowModal(false)}>
            <IoClose />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>
          <Field label="İsim Soyisim" name="name" />
          <Field label="Pozisyon" name="position" />
          <Field label="Şirket" name="company" />
          <Field label="Telefon" type="number" name="phone" />
          <Field label="Email" type="email" name="email" />

          <div className="modal-buttons">
            <button type="button">Vazgeç</button>
            <button type="submit">Gönder</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
