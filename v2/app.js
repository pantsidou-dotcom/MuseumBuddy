// ---------- Config / i18n ----------
const T = {
  nl: {
    searchPh: "Zoek op naam, stad of thema…",
    free: "Gratis", kids: "Kindvriendelijk", temp: "Tijdelijke exposities",
    empty: "Geen resultaten. Pas je zoekopdracht of filters aan.",
    hero: "Filter op gratis, kindvriendelijk of tijdelijke exposities — en klik door naar de officiële site.",
    endingSoon: "Eindigt binnenkort", now: "Nu te zien"
  },
  en: {
    searchPh: "Search by name, city or theme…",
    free: "Free", kids: "Kid-friendly", temp: "Temporary exhibitions",
    empty: "No results. Adjust your search or filters.",
    hero: "Filter by free, kid-friendly, or temporary exhibitions — tap through to official sites.",
    endingSoon: "Ending soon", now: "On now"
  }
};
const LKEY_LANG = "museumbuddy.v2.lang";
const langNL = () => document.getElementById("lang-nl");
const langEN = () => document.getElementById("lang-en");

// ---------- Elements ----------
const q = () => document.getElementById("q");
const fFree = () => document.getElementById("f-free");
const fKids = () => document.getElementById("f-kids");
const fTemp = () => document.getElementById("f-temp");
const sortSel = () => document.getElementById("sort");
const list = () => document.getElementById("list");
const empty = () => document.getElementById("empty");
const themeBtn = () => document.getElementById("theme");

// ---------- State ----------
let lang = localStorage.getItem(LKEY_LANG) || "nl";
let DATA = [];

// ---------- Helpers ----------
function setLang(next){
  lang = next; localStorage.setItem(LKEY_LANG, lang);
  langNL().classList.toggle("active", lang==="nl");
  langEN().classList.toggle("active", lang==="en");
  langNL().setAttribute("aria-selected", lang==="nl");
  langEN().setAttribute("aria-selected", lang==="en");
  q().placeholder = T[lang].searchPh;
  document.querySelector(".i-free").textContent = T[lang].free;
  document.querySelector(".i-kids").textContent = T[lang].kids;
  document.querySelector(".i-temp").textContent = T[lang].temp;
  document.querySelector(".i-hero-sub").textContent = T[lang].hero;
  document.querySelector(".i-empty").textContent = T[lang].empty;
  render();
}

function daysUntil(dateStr){
  if(!dateStr) return Infinity;
  const now = new Date();
  const d = new Date(dateStr+"T23:59:59");
  return Math.ceil((d-now)/(1000*60*60*24));
}

function placeholder(name="Museum"){
  const bg="#e5e7eb", fg="#6b7280", text=encodeURIComponent(name);
  return "data:image/svg+xml;utf8," +
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>`+
    `<rect width='100%' height='100%' fill='${bg}'/>`+
    `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' `+
    `font-family='Quicksand, system-ui, sans-serif' font-size='42' fill='${fg}'>${text}</text>`+
    `</svg>`;
}

function matches(item, txt){
  const s = (item.name+" "+(item.city||"")+" "+(item.theme||"")).toLowerCase();
  return s.includes(txt.toLowerCase());
}
function applyFilters(items){
  const txt = q().value.trim();
  let out = items;
  if (txt) out = out.filter(it => matches(it, txt));
  if (fFree().checked) out = out.filter(it => it.free);
  if (fKids().checked) out = out.filter(it => it.kids);
  if (fTemp().checked) out = out.filter(it => it.temporary);
  const mode = sortSel().value;
  if (mode==="name") out = [...out].sort((a,b)=>a.name.localeCompare(b.name));
  if (mode==="city") out = [...out].sort((a,b)=>(a.city||"").localeCompare(b.city||""));
  if (mode==="endingSoon") out = [...out].sort((a,b)=>daysUntil(a.end)-daysUntil(b.end));
  return out;
}

// ---------- Render ----------
function render(){
  const items = applyFilters(DATA);
  const $list = list();
  $list.innerHTML = "";
  if (!items.length){
    empty().hidden = false;
    return;
  }
  empty().hidden = true;

  for (const m of items){
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = m.url; link.target = "_blank"; link.rel = "noopener";

    const card = document.createElement("article");
    card.className = "card";

    // Figure with image
    const figure = document.createElement("figure");
    figure.className = "card-figure";

    const picture = document.createElement("picture");
    if (m.photoLg){
      const srcWebp = document.createElement("source");
      srcWebp.type = "image/webp";
      srcWebp.srcset = `${m.photoSm || m.photo || ""} 640w, ${m.photo || ""} 1280w, ${m.photoLg} 1920w`;
      srcWebp.sizes = "(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw";
      picture.appendChild(srcWebp);
    }
    const img = document.createElement("img");
    img.className = "card-img";
    img.loading = "lazy"; img.decoding = "async";
    img.alt = `${m.name} — ${m.city||""}`;
    img.src = m.photo || m.photoSm || "";
    img.srcset = [
      m.photoSm ? `${m.photoSm} 640w` : "",
      m.photo   ? `${m.photo} 1280w`   : "",
      m.photoLg ? `${m.photoLg} 1920w` : ""
    ].filter(Boolean).join(", ");
    img.sizes = "(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw";
    img.onerror = () => { img.onerror=null; img.src = placeholder(m.name); };
    picture.appendChild(img);

    const cap = document.createElement("figcaption");
    cap.className = "card-cap";
    cap.textContent = `${m.city||""}${m.city&&m.theme?" • ":""}${m.theme||""}`;

    figure.appendChild(picture);
    figure.appendChild(cap);

    // Text & badges
    const titleRow = document.createElement("div");
    titleRow.className = "title-row";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = m.name;

    titleRow.appendChild(title);

    const badges = document.createElement("div");
    badges.className = "badges";
    if (m.free) badges.appendChild(makeBadge(T[lang].free, "free"));
    if (m.kids) badges.appendChild(makeBadge(T[lang].kids, "kids"));
    if (m.temporary){
      const d = daysUntil(m.end);
      if (d <= 14) badges.appendChild(makeBadge(T[lang].endingSoon, "end"));
      else badges.appendChild(makeBadge(T[lang].now, "now"));
    }

    card.appendChild(figure);
    card.appendChild(titleRow);
    if (m.description){
      const desc = document.createElement("p");
      desc.className = "desc";
      desc.textContent = m.description;
      card.appendChild(desc);
    }
    card.appendChild(badges);
    link.appendChild(card);
    $list.appendChild(link);
  }
}
function makeBadge(text, cls=""){
  const el = document.createElement("span");
  el.className = "badge "+cls;
  el.textContent = text;
  return el;
}

// ---------- Events ----------
document.addEventListener("DOMContentLoaded", async () => {
  // Theme toggle
  themeBtn().addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme")==="dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
  });

  // Language init & events
  langNL().addEventListener("click", ()=>setLang("nl"));
  langEN().addEventListener("click", ()=>setLang("en"));
  setLang(lang);

  // Filters
  q().addEventListener("input", render);
  fFree().addEventListener("change", render);
  fKids().addEventListener("change", render);
  fTemp().addEventListener("change", render);
  sortSel().addEventListener("change", render);

  // Data load
  try{
    const res = await fetch("./data/musea.json", {cache:"no-store"});
    DATA = await res.json();
  }catch(e){
    console.warn("Kon data niet laden, fallback dataset", e);
    DATA = [];
  }
  render();
});
