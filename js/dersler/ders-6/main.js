// * DOM (Document Object Model):

// Kullanıcının arayüzde dinamik işlemler [Tıklama,sürükleme,...] yapabilmesini sağlamak için DOM kullanılır.

// DOM ile html elemanlarına müdahelede bulunabilmek için ilk olarak html elemanları js kısmına çekmemiz gerekir.Html'den js kısmına eleman çekmek için kullanılan metotlar:

// 1-)document.getElementsByTagName(): Html'den elemanları etiket adına göre çekmek için kullanılır.Bu metot html'den çektiği elamanlar birden fazla olabileceğinden erişilen elemanları bir collection şeklinde döner.

const title1 = document.getElementsByTagName("h1");

// console.log(title1[0]);

// 2-)document.getElementsByClassName(): Html'den elemanları class adına göre çekmek için kullanılır.Bu metot html'den çektiği elamanlar birden fazla olabileceğinden erişilen elemanları bir collection şeklinde döner.

const title2 = document.getElementsByClassName("title-2");

// console.log(title2[0]);

// 3-)document.getElementById(): Html'den elemanları id'sine göre çekmek için kullanılır.

const title3 = document.getElementById("title-3");

// console.log(title3);

// * Html'den elemanlara erişmek için kullanılan bu 3 metot haricinde bu 3 metodun görevini tek başına yapabilen document.querySelector adında bir metod vardır.

// ! Bu metot ile html'den bir elemanı class veya id'sine göre çekmek istersek class adının başına "." id'nin başına "#" konulur.

const title4 = document.querySelector("#title-4");

// console.log(title4);

// Erişilen elemanlara bazı müdahelelerde bulunabiliriz:

// * 1-) Still Özelliği Ekleme:

// Bir elemana still özelliği vermek için eleman adının sonuna ".style" eklenir.Sonrasında verilmek istenen still özelliği yazılır.Eğer verilecek still özelliği birden fazla kelimeden oluşuyorsa bunu camelCase 'e uygun şekilde yazmamız gerekir.

title4.style.backgroundColor = "red";
title4.style.fontSize = "40px";
