document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.language-selector a').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      loadLanguage(lang);
    });
  });
  loadLanguage("uz");
});
function loadLanguage(lang) {
  fetch(`/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("description").textContent = data.description;
      document.getElementById("loginBtn").textContent = data.login;
      document.getElementById("signupBtn").textContent = data.signup;
    });
}