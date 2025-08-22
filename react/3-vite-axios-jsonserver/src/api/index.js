// Axios'u import et
import axios from "axios";

// Axios ile API isteklerini yöneteceğimiz bir yapı oluştur
const api = axios.create({
  baseURL: "http://localhost:4044",
  timeout: 2000, // İstek için zaman aşımı süresi (ms)
  timeoutErrorMessage: "Request timed out", // Zaman aşımı hatası mesajı
  headers: {}, // İstek için header ayarlamaları
});

export default api;
