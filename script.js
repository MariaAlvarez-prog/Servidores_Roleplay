// ====== EDITA AQUÍ TUS SERVIDORES ======
// Son datos de ejemplo: cámbialos por servidores reales.
const servidores = [
  { nombre: "Valentine Nights", estilo: "Serio", acceso: "Whitelist", descripcion: "Roleplay serio con leyes, bandas y economía propia.", enlace: "#" },
  { nombre: "Tierra de Nadie", estilo: "Semi-serio", acceso: "Abierto", descripcion: "Ambiente relajado, ideal para jugadores con algo de experiencia.", enlace: "#" },
  { nombre: "El Rancho Sur", estilo: "Casual", acceso: "Abierto", descripcion: "Perfecto para empezar: comunidad amable y guías para nuevos.", enlace: "#" },
  { nombre: "Saint Denis Ley y Orden", estilo: "Serio", acceso: "Whitelist", descripcion: "Sheriffs, juicios y negocios en una ciudad viva.", enlace: "#" },
  { nombre: "Camino Dorado", estilo: "Semi-serio", acceso: "Whitelist", descripcion: "Historias de caza, comercio y cuadrillas con eventos semanales.", enlace: "#" },
  { nombre: "Campamento Libre", estilo: "Casual", acceso: "Abierto", descripcion: "Sin presiones: entra, crea tu personaje y explora.", enlace: "#" }
];

const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const buscar = document.getElementById("buscar");
const fEstilo = document.getElementById("f-estilo");
const fAcceso = document.getElementById("f-acceso");

function crearTarjeta(s) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3></h3>
    <div class="tags">
      <span class="tag"></span>
      <span class="tag ${s.acceso === "Whitelist" ? "wl" : ""}"></span>
    </div>
    <p></p>
    <a class="btn" target="_blank" rel="noopener">Visitar servidor</a>`;
  card.querySelector("h3").textContent = s.nombre;
  const tags = card.querySelectorAll(".tag");
  tags[0].textContent = s.estilo;
  tags[1].textContent = s.acceso;
  card.querySelector("p").textContent = s.descripcion;
  card.querySelector(".btn").href = s.enlace;
  return card;
}

function mostrar() {
  const q = buscar.value.trim().toLowerCase();
  const filtrados = servidores.filter(s =>
    s.nombre.toLowerCase().includes(q) &&
    (!fEstilo.value || s.estilo === fEstilo.value) &&
    (!fAcceso.value || s.acceso === fAcceso.value)
  );
  lista.innerHTML = "";
  if (filtrados.length === 0) {
    lista.innerHTML = '<p class="vacio">Ningún servidor coincide. Prueba quitando algún filtro.</p>';
  } else {
    filtrados.forEach(s => lista.appendChild(crearTarjeta(s)));
  }
  contador.textContent = `${filtrados.length} ${filtrados.length === 1 ? "servidor" : "servidores"}`;
}

[buscar, fEstilo, fAcceso].forEach(el => el.addEventListener("input", mostrar));
mostrar();

// Menú móvil
const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", abierto);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
}));

document.getElementById("anio").textContent = new Date().getFullYear();
