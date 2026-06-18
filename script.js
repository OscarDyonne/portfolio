const langButton = document.getElementById("lang-switch");
let currentLang = "fr";

langButton.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";

  document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
    element.textContent = element.dataset[currentLang];
  });

  langButton.textContent = currentLang === "fr" ? "EN" : "FR";
  document.documentElement.lang = currentLang;
});