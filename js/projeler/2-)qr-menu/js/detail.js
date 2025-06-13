// * Kapsam projelerde bazı sayfalar birden fazla eleman için renderlanır.[İnstagram kullanıcı sayfası,amazon ürün sayfası,...].Bunu yaparken bir html sayfasına yönlendirilir.Yönlendirme yapılırken ise url'e parametre geçilir.Geçilen parametre sonucunda ise bu sayfa dinamik şekilde rendelanır.

import getMenu from "./api.js";
import { renderDetailPage } from "./ui.js";

// URLSearchParams javascript içerisinde bulunan bir class'dır.Bu class ile url'e geçilen parametreleri kolay bir şekilde yönetebiliriz.

// URLSearchParams classı ile url'deki parametrelere eriş
const params = new URLSearchParams(window.location.search);

// Url'e geçilen id değerine eriş ve bunu id değişkenine ata
const id = +params.get("id");

// Api'a istek at ve verileri al
const data = await getMenu();

// Api'dan alınan veriler içerisinde id'si bilinen elemanı bul
const foundItem = data.find((item) => item.id === id);

renderDetailPage(foundItem);
