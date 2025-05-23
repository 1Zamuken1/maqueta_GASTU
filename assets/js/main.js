function cargarNavbar() {
  fetch("./components/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;

      // Activar botón una vez insertado
      const toggleBtn = document.getElementById("toggleBtn");
      const sidebar = document.getElementById("sidebar");
      const main = document.querySelector("main");

      toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        // Ajusta el margen del main según el estado de la sidebar
        if (sidebar.classList.contains("collapsed")) {
          main.style.marginLeft = "60px";
        } else {
          main.style.marginLeft = "250px";
        }
      });
    });
}

window.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
});