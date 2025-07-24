import { getFlagUrl, getWeatherData } from "./api.js";
import cities from "./constant.js";
import {
  createDataListOption,
  displayWeatherData,
  renderError,
  renderLoader,
  uiElement,
  updateThemeIcon,
} from "./ui.js";

// Body
const body = document.body;
// Theme Value
const theme = localStorage.getItem("data-theme") || "light";

// Body'e theme değerini attribute olarak ekle
body.setAttribute("data-theme", theme);

// Sayfa yüklendiği anda option'ları oluşturacak fonksiyon

document.addEventListener("DOMContentLoaded", () => {
  createDataListOption(cities);
});

// searchFormun gönderilmesini izle
uiElement.searchInput.addEventListener("submit", async (e) => {
  // Sayfa yenilemesini engelle
  e.preventDefault();

  // Input içerisindeki şehir adına eriş ve içerisindeki boşlukları kaldır
  const cityName = e.target[0].value.trim();

  // Eğer şehir adı girilmediyse kullanıcıya uyarı ver
  if (!cityName) {
    alert("Şehir isminin girilmesi zorunludur.Lütfen şehir adı giriniz.");

    // Fonksiyonu durdur
    return;
  }

  // Loader'ı render et
  renderLoader();
  try {
    // Hava durumu verisi için api isteği at
    const weatherData = await getWeatherData(cityName);

    // Dinamik bayrak url'i dönder
    const flag = getFlagUrl(weatherData.sys.country);

    // Arayüzü dinamik şekilde renderla
    displayWeatherData(weatherData, flag);
  } catch (error) {
    renderError();
  } finally {
    renderLoader();
  }
});

// Theme Btn'e tıklanma olayını izle
uiElement.themeBtn.addEventListener("click", () => {
  // Mevcut theme değerine eriş
  const currentTheme = body.getAttribute("data-theme");

  // Erişilen theme değerinin zıttını al
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Theme değerini body'e attribute olarak ekle
  body.setAttribute("data-theme", newTheme);

  // Theme değerini local'e bildir
  localStorage.setItem("data-theme", newTheme);

  // Theme ikonunu güncelle
  updateThemeIcon(newTheme);
});
