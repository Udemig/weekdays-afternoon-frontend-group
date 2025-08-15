import { useState } from "react";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";
import Form from "./Form";
import Users from "./Users";

const AppCopy = () => {
  const [showClassComponent, setShowClassComponent] = useState(false);
  const [showCounterComponent, setShowCounterComponent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="page py-3 px-4">
      <Users />

      {/* todo: Eğer kullanıcı adminse "Admin Girişi",değilse "Kullanıcı Girişi" yazdır. */}

      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="btn btn-info mx-3 my-4"
      >
        {/* isAdmin değeri true ise "Admin Girişi" false ise "Kullanıcı Girişi" yazdır */}
        {isAdmin ? "Kullanıcı Girişi" : "Admin Girişi"}
      </button>

      <h1 className="fs-1 fw-bold mx-4">
        {/* isAdmin değeri true ise "Admin Girişi" false ise "Kullanıcı Girişi" yazdır */}
        {isAdmin ? "Admin Girişi" : "Kullanıcı Girişi"}
      </h1>

      {/* todo: Kullanıcının giriş işlemi sırasında hatası varsa "Giriş bilgileriniz hatalı.Lütfen giriş bilgilerinizi kontrol ediniz yazdır." */}

      {hasError && (
        <h1 className="fs-1 fw-bold mx-3 my-5">
          Giriş bilgileriniz hatalı.Lütfen giriş bilgilerinizi kontrol ediniz
          yazdır.
        </h1>
      )}

      <button
        onClick={() => setShowCounterComponent(!showCounterComponent)}
        className="btn btn-light mx-3 my-5"
      >
        Counter Bileşenini Göster
      </button>

      {showCounterComponent && <Counter />}

      <Form />

      <button
        className="btn btn-secondary mx-4 my-3"
        onClick={() => setShowClassComponent(!showClassComponent)}
      >
        Class Componenti Göster-Gizle
      </button>
      {showClassComponent && <ClassComponent />}
    </div>
  );
};

export default AppCopy;
