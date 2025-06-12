// Api'dan veri çekecek fonksiyon

const getMenu = async () => {
  // Api'a istek at
  const response = await fetch("../db.json");

  // Api'dan gelen veriyi Js nesnesine çevir
  const data = await response.json();

  // Js nesnesine çevirilen veriyi return et
  return data.menu;
};

export default getMenu;
