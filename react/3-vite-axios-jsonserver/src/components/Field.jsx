import React from "react";

// Eğer  Field bileşenine bir type propu geçilmediyse bu nokta type propunun değerini text olarak ata.Ama eğer type propu geçilirse bu geçilen değer type propunun değeri olsun.
const Field = ({ label, type = "text", name }) => {
  return (
    // Javascript içerisinde yer alan formData bir formun içerisindeki değerlere erişebilmek için bu elemanların birer name değerine sahip olmasını ister.Bizde burada Field bileşenine bir name propu geçip geçilen bu propu inputlara name olarak verdik bu sayede birden fazla input içerisindeki değerlere kolayca eriştik.
    <div className="field">
      <label htmlFor={name}>{label}</label>

      <input type={type} id={name} name={name} />
    </div>
  );
};

export default Field;
