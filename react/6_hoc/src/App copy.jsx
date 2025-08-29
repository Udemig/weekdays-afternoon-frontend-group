import { useState } from "react";
import UserForm from "./components/Modal";
import ProductInfo from "./components/ProductInfo";
import Modal from "./components/Modal";

const App = () => {
  const [showFormModal, setIsShowFormModal] = useState(false);
  return (
    <div className="d-flex flex-column justify-center p-5 ">
      <h1>Udemig</h1>
      <button
        onClick={() => setIsShowFormModal(!showFormModal)}
        className="btn btn-primary"
      >
        Göster/Gizle
      </button>
      {showFormModal && <ProductInfo />}

      <Modal>
        <div className="mt-4 bg-success p-4">
          <h2>Kullancı kayıt işlemi başarılı</h2>
        </div>
      </Modal>
      <Modal>
        <div className="mt-4 bg-danger p-4">
          <h2>Kullancı kayıt işlemi başarısız</h2>
        </div>
      </Modal>
      <Modal>
        <div className="mt-4 bg-warning p-4">
          <h2>İşlem sırasında hata oldu ilgili bilgileri kontrol ediniz</h2>
        </div>
      </Modal>
    </div>
  );
};

export default App;
