const DATA = [
  { id: 1, name: "Rijksmuseum", city: "Amsterdam", free: false, kids: true, temporary: true, theme: "Kunst & Geschiedenis", url: "https://www.rijksmuseum.nl/" },
  { id: 2, name: "Van Gogh Museum", city: "Amsterdam", free: false, kids: true, temporary: true, theme: "Kunst", url: "https://www.vangoghmuseum.nl/" },
  { id: 3, name: "NEMO Science Museum", city: "Amsterdam", free: false, kids: true, temporary: true, theme: "Wetenschap", url: "https://www.nemosciencemuseum.nl/" },
  { id: 4, name: "Kunsthal", city: "Rotterdam", free: false, kids: true, temporary: true, theme: "Hedendaagse kunst", url: "https://www.kunsthal.nl/" },
  { id: 5, name: "Boijmans Depot", city: "Rotterdam", free: false, kids: false, temporary: false, theme: "Collectie", url: "https://www.boijmans.nl/depot/" },
  { id: 6, name: "Mauritshuis", city: "Den Haag", free: false, kids: true, temporary: true, theme: "Schilderkunst", url: "https://www.mauritshuis.nl/" },
  { id: 7, name: "Frans Hals Museum", city: "Haarlem", free: false, kids: true, temporary: true, theme: "Schilderkunst", url: "https://www.franshalsmuseum.nl/" },
  { id: 8, name: "Museum Ons' Lieve Heer op Solder", city: "Amsterdam", free: false, kids: true, temporary: false, theme: "Historie", url: "https://www.opsolder.nl/" },
  { id: 9, name: "Het Spoorwegmuseum", city: "Utrecht", free: false, kids: true, temporary: true, theme: "Techniek & Historie", url: "https://www.spoorwegmuseum.nl/" },
  { id:10, name: "Stedelijk Museum", city: "Amsterdam", free: false, kids: true, temporary: true, theme: "Moderne kunst", url: "https://www.stedelijk.nl/" },
  { id:11, name: "Museum Arnhem", city: "Arnhem", free: false, kids: true, temporary: true, theme: "Kunst", url: "https://www.museumarnhem.nl/" },
  { id:12, name: "Allard Pierson", city: "Amsterdam", free: true, kids: true, temporary: true, theme: "Erfgoed", url: "https://www.allardpierson.nl/" }
];

const T = {
  nl: {
    searchPh: "Zoek op naam, stad of thema…",
    free: "Gratis",
    kids: "Kindvriendelijk",
    temp: "Tijdelijke exposities",
    nores: "Geen resultaten. Pas je zoekopdracht of filters aan.",
    foot: "Mini demo • Alles lokaal in je browser • Geen tracking"
  },
  en: {
    searchPh: "Search by name, city or theme…",
    free: "Free entry",
    kids: "Kid-friendly",
    temp: "Temporary exhibitions",
    nores: "No results. Adjust your search or filters.",
    foot: "Mini demo • Everything local in your browser • No tracking"
  }
};

const $ = sel => document.querySelector(sel);
const list = $("#list");
const empty = $("#empty");
const q = $("#q");
const sort = $("#sort");
const fFree = $("#f-free");
const fKids = $("#f-kids");
const fTemp = $("#f-temp");
const reset = $("#reset");
const langNL = $("#lang-nl");
const langEN = $("#lang-en");
const themeToggle = $("#theme-toggle");

const KEY = "museumbuddy.lang.v1";
let lang = (localStorage.getItem(KEY) || "nl");
const THEME_KEY = "museumbuddy.theme.v1";
let theme = localStorage.getItem(THEME_KEY) || "light";

function setLang(next) {
  lang = next;
  localStorage.setItem(KEY, lang);
  langNL.classList.toggle("active", lang === "nl");
  langEN.classList.toggle("active", lang === "en");
  langNL.setAttribute("aria-selected", lang === "nl");
  langEN.setAttribute("aria-selected", lang === "en");
  q.placeholder = T[lang].searchPh;
  $(".i-free").textContent = T[lang].free;
  $(".i-kids").textContent = T[lang].kids;
  $(".i-temp").textContent = T[lang].temp;
  $(".i-foot").textContent = T[lang].foot;
  $(".i-empty").textContent = T[lang].nores;
  render();
}

langNL.addEventListener("click", () => setLang("nl"));
langEN.addEventListener("click", () => setLang("en"));

function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
}
themeToggle.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
});
applyTheme();

function matches(item, txt) {
  const s = (item.name + " " + item.city + " " + item.theme).toLowerCase();
  return s.includes(txt.toLowerCase());
}

function applyFilters(items) {
  const txt = q.value.trim();
  let out = items;
  if (txt) out = out.filter(it => matches(it, txt));
  if (fFree.checked) out = out.filter(it => it.free);
  if (fKids.checked) out = out.filter(it => it.kids);
  if (fTemp.checked) out = out.filter(it => it.temporary);
  const key = sort.value;
  out = out.slice().sort((a,b) => a[key].localeCompare(b[key]));
  return out;
}

function badge(label, cls) {
  const el = document.createElement("span");
  el.className = "badge " + cls;
  el.textContent = label;
  return el;
}

function render() {
  const items = applyFilters(DATA);
  list.innerHTML = "";
  if (!items.length) {
    list.setAttribute("aria-busy", "false");
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.removeAttribute("aria-busy");
  for (const m of items) {
    const card = document.createElement("a");
    card.className = "card";
    card.setAttribute("role", "listitem");
    card.href = m.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const row = document.createElement("div");
    row.className = "title-row";

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = m.name;

    const fav = document.createElement("button");
    fav.className = "fav";
    fav.setAttribute("aria-pressed", "false");
    fav.setAttribute("aria-label", "Voeg toe aan favorieten");
    fav.textContent = "♡";
    fav.addEventListener("click", e => {
      e.preventDefault();
      const active = fav.classList.toggle("active");
      fav.textContent = active ? "❤" : "♡";
      fav.setAttribute("aria-pressed", active);
    });

    row.appendChild(title);
    row.appendChild(fav);

    const meta = document.createElement("div");
    meta.style.color = "var(--muted)";
    meta.textContent = m.city + " • " + m.theme;

    const badges = document.createElement("div");
    badges.className = "badges";
    if (m.free)  badges.appendChild(badge(T[lang].free, "free"));
    if (m.kids)  badges.appendChild(badge(T[lang].kids, "kids"));
    if (m.temporary) badges.appendChild(badge(T[lang].temp, "temp"));

    card.appendChild(row);
    card.appendChild(meta);
    card.appendChild(badges);
    list.appendChild(card);
  }
}

q.addEventListener("input", render);
sort.addEventListener("change", render);
fFree.addEventListener("change", render);
fKids.addEventListener("change", render);
fTemp.addEventListener("change", render);
reset.addEventListener("click", () => {
  q.value = "";
  sort.value = "name";
  fFree.checked = fKids.checked = fTemp.checked = false;
  render();
});

function showSkeleton() {
  list.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const sk = document.createElement("div");
    sk.className = "skeleton";
    list.appendChild(sk);
  }
}

showSkeleton();
setTimeout(() => setLang(lang), 300);

