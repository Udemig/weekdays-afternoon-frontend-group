// API'dan verileri çekecek fonksiyon
const getProducts = async () => {
  try {
    // Api'a istek at
    const response = await fetch("../db.json");

    // JSON verisini js nesnesine çevir
    const data = await response.json();

    // products'ları return et
    return data.products;
  } catch (error) {
    console.log("Network Error:", error);
  }
};

export default getProducts;
