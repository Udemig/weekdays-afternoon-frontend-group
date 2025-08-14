import { useState } from "react";

const Form = () => {
  // İsim ve şifre için state oluştur
  let [name, setName] = useState(null);
  let [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // İsim,şifre değerlerine eriş ve bunları uygun state'lere aktar
    setName(e.target[0].value);
    setPassword(e.target[1].value);
  };

  // ! Özetle state'ler bir react bileşeni içerisinde verileri kolayca yönetmemizi sağlar.Bunun yanı sıra ilgili state'in değişmesi durumunda bileşenin yeniden render edilmesinide sağlar.

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-2 container p-4 border rounded"
      >
        <h1 className="text-center fw-bold">Giriş Formu</h1>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="İsim giriniz ..."
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Şifre giriniz ..."
        />
        <button className="btn btn-success mt-3">Giriş Yap</button>
      </form>

      <div className="mt-5 container d-flex flex-column gap-3">
        <h1>İsim: {name} </h1>
        <h1>Şifre: {password} </h1>
      </div>
    </>
  );
};

export default Form;
