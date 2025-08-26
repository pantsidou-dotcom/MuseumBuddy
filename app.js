const DATA = [
  {
    id: 1,
    name: "Rijksmuseum",
    city: "Amsterdam",
    free: false,
    kids: true,
    temporary: true,
    theme: "Kunst & Geschiedenis",
    url: "https://www.rijksmuseum.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Amsterdam_-_Rijksmuseum_-_2019.jpg/400px-Amsterdam_-_Rijksmuseum_-_2019.jpg",
    desc: "Nationaal museum van Nederlandse kunst en geschiedenis."
  },
  {
    id: 2,
    name: "Van Gogh Museum",
    city: "Amsterdam",
    free: false,
    kids: true,
    temporary: true,
    theme: "Kunst",
    url: "https://www.vangoghmuseum.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Van_Gogh_Museum_South_Facade_%282007%29.jpg/400px-Van_Gogh_Museum_South_Facade_%282007%29.jpg",
    desc: "Collectie werken van Vincent van Gogh en tijdgenoten."
  },
  {
    id: 3,
    name: "NEMO Science Museum",
    city: "Amsterdam",
    free: false,
    kids: true,
    temporary: true,
    theme: "Wetenschap",
    url: "https://www.nemosciencemuseum.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amsterdam_-_NEMO_-_panoramio.jpg/400px-Amsterdam_-_NEMO_-_panoramio.jpg",
    desc: "Interactief museum over wetenschap en technologie."
  },
  {
    id: 4,
    name: "Kunsthal",
    city: "Rotterdam",
    free: false,
    kids: true,
    temporary: true,
    theme: "Hedendaagse kunst",
    url: "https://www.kunsthal.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kunsthal_Rotterdam_01.JPG/400px-Kunsthal_Rotterdam_01.JPG",
    desc: "Hedendaagse kunst en veelzijdige tentoonstellingen."
  },
  {
    id: 5,
    name: "Boijmans Depot",
    city: "Rotterdam",
    free: false,
    kids: false,
    temporary: false,
    theme: "Collectie",
    url: "https://www.boijmans.nl/depot/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Depot_Boijmans_van_Beuningen_2019.jpg/400px-Depot_Boijmans_van_Beuningen_2019.jpg",
    desc: "Publiek toegankelijk kunstdepot van Museum Boijmans Van Beuningen."
  },
  {
    id: 6,
    name: "Mauritshuis",
    city: "Den Haag",
    free: false,
    kids: true,
    temporary: true,
    theme: "Schilderkunst",
    url: "https://www.mauritshuis.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Den_Haag_Mauritshuis2.JPG/400px-Den_Haag_Mauritshuis2.JPG",
    desc: "17e-eeuwse Nederlandse schilderkunst met het beroemde Meisje met de parel."
  },
  {
    id: 7,
    name: "Frans Hals Museum",
    city: "Haarlem",
    free: false,
    kids: true,
    temporary: true,
    theme: "Schilderkunst",
    url: "https://www.franshalsmuseum.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Frans_Hals_Museum.jpg/400px-Frans_Hals_Museum.jpg",
    desc: "Schilderijen van Frans Hals en Haarlemse meesters."
  },
  {
    id: 8,
    name: "Museum Ons' Lieve Heer op Solder",
    city: "Amsterdam",
    free: false,
    kids: true,
    temporary: false,
    theme: "Historie",
    url: "https://www.opsolder.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ons%27_Lieve_Heer_op_Solder_exterior.jpg/400px-Ons%27_Lieve_Heer_op_Solder_exterior.jpg",
    desc: "Uniek 17e-eeuws grachtenpand met verborgen huiskerk."
  },
  {
    id: 9,
    name: "Het Spoorwegmuseum",
    city: "Utrecht",
    free: false,
    kids: true,
    temporary: true,
    theme: "Techniek & Historie",
    url: "https://www.spoorwegmuseum.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Spoorwegmuseum_Rijksmonument_10730_Maliebaanstation_Utrecht.JPG/400px-Spoorwegmuseum_Rijksmonument_10730_Maliebaanstation_Utrecht.JPG",
    desc: "Geschiedenis van het Nederlandse spoor met historische treinen."
  },
  {
    id: 10,
    name: "Stedelijk Museum",
    city: "Amsterdam",
    free: false,
    kids: true,
    temporary: true,
    theme: "Moderne kunst",
    url: "https://www.stedelijk.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Stedelijk_Museum_Amsterdam_2011.jpg/400px-Stedelijk_Museum_Amsterdam_2011.jpg",
    desc: "Moderne en hedendaagse kunst en vormgeving."
  },
  {
    id: 11,
    name: "Museum Arnhem",
    city: "Arnhem",
    free: false,
    kids: true,
    temporary: true,
    theme: "Kunst",
    url: "https://www.museumarnhem.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Museum_Arnhem_Entrance_2019.jpg/400px-Museum_Arnhem_Entrance_2019.jpg",
    desc: "Kunstmuseum met aandacht voor hedendaagse kunst en vormgeving."
  },
  {
    id: 12,
    name: "Allard Pierson",
    city: "Amsterdam",
    free: true,
    kids: true,
    temporary: true,
    theme: "Erfgoed",
    url: "https://www.allardpierson.nl/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Allard_Pierson_Museum_2010.JPG/400px-Allard_Pierson_Museum_2010.JPG",
    desc: "Erfgoed en collecties van de Universiteit van Amsterdam, van oudheid tot heden."
  }
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
const themeIcon = themeToggle.querySelector("svg");

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
  let use = themeIcon.querySelector("use");
  if (!use) {
    use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    themeIcon.appendChild(use);
  }
  const href = theme === "light" ? "./icons/moon.svg#moon" : "./icons/sun.svg#sun";
  use.setAttribute("href", href);
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

function placeholder(name) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 160'>` +
              `<rect width='400' height='160' fill='#d1d5db'/>` +
              `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'` +
              ` font-family='sans-serif' font-size='20' fill='#6b7280'>${name}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
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
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = m.img || placeholder(m.name);
    img.alt = m.name;
    img.referrerPolicy = "no-referrer";
    img.className = "photo";
    img.onerror = () => {
      img.onerror = null;
      img.src = placeholder(m.name);
    };

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

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = m.desc;

    const badges = document.createElement("div");
    badges.className = "badges";
    if (m.free)  badges.appendChild(badge(T[lang].free, "free"));
    if (m.kids)  badges.appendChild(badge(T[lang].kids, "kids"));
    if (m.temporary) badges.appendChild(badge(T[lang].temp, "temp"));

    card.appendChild(img);
    card.appendChild(row);
    card.appendChild(meta);
    card.appendChild(desc);
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

