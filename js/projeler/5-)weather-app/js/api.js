// Apı Key
const apiKey = "40e7ee4a6de50f10ca31c0283e5c0132";

// ! Hava durumu verisini api'dan alacak fonksiyon
// APİ'a istek atsın gelen veriyi js nesnesine çevirip return etsin

// const getWeatherData= (city)=> fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((res)=> res.json())

const getWeatherData = async (city) => {
  // Api'a istek at
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`
  );

  // Gelen veriyi js nesnesine çevir
  const data = await response.json();

  // Elde edilen değeri return et
  return data;
};

// ! Bayrak verisini alacak fonksiyon
const getFlagUrl = (countryCode) =>
  `https://flagcdn.com/108x81/${countryCode.toLocaleLowerCase()}.png`;

export { getWeatherData, getFlagUrl };
