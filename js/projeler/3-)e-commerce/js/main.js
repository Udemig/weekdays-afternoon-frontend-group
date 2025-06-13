import { UIEleman } from "./ui.js";

// Menu Icon'una tıklanma olayını izle
UIEleman.menuIcon.addEventListener("click", () => {
  // Header kısmındaki nav kısmını aç kapa yap
  UIEleman.nav.classList.toggle("open");
});
