/* ---------- Icons (Lucide paths, inline so no library is needed) ---------- */
const ICONS = {
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
};
const icon = (name, size = 16) =>
  `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
function hydrateIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => {
    el.outerHTML = icon(el.dataset.icon, +el.dataset.size || 16);
  });
}

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chips = (items, cls = "") => items.map((s) => `<span class="chip ${cls}">${esc(s)}</span>`).join("");

/* Image, or a tidy placeholder with a folder hint. Click opens the lightbox. */
function pic({ src, hint, ratio = "4/3", alt = "", title = "", round = false }) {
  const style = `${ratio ? `aspect-ratio:${ratio};` : ""}${round ? "border-radius:50%;" : ""}`;
  if (!src) return `<div class="ph" style="${style}">${icon("plus", 18)}<small>${esc(hint)}</small></div>`;
  return `<img class="pic" style="${style}" src="${src}" alt="${esc(alt)}" data-lb="${src}" data-title="${esc(title)}" loading="lazy" />`;
}

/* ---------- Data ---------- */
const profile = list("profile")[0]?.url;
const photos = list("photos");
const intern = list("internship");
const agri = list("agriculture");
const work = list("work").map((w) => ({ ...w, cat: WORK_CATS[w.file.split("-")[0].toLowerCase()] || "IT" }));

/* ---------- Static bindings ---------- */
$("#heroName").innerHTML = `${esc(ME.name.split(" ")[0])} <em>${esc(ME.name.split(" ").slice(1).join(" "))}</em>`;
document.querySelectorAll("[data-bind]").forEach((a) => {
  const k = a.dataset.bind;
  a.href = k === "mailto" ? "mailto:" + ME.email : ME[k];
});
$("#stats").innerHTML = [["2 yrs", "Photojournalism"], ["2", "Internships"], [CERTS.length, "Certificates"], ["2026", "BSIT Graduate"]]
  .map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join("");
$("#heroPortrait").innerHTML = profile
  ? `<img class="portrait" src="${profile}" alt="${esc(ME.name)}" />`
  : `<div class="portrait ph big"><span>${ME.initials}</span><small>Put profile.jpg in src/assets/profile/</small></div>`;
$("#marquee").innerHTML = [...TECH, ...TECH].map((t) => `<span>${esc(t)}</span>`).join("");
$("#aboutPic").innerHTML = pic({ src: profile, hint: "src/assets/profile/profile.jpg", ratio: "1/1", alt: ME.name, title: ME.name });
$("#aboutName").textContent = ME.name;
$("#aboutLoc").textContent = ME.location;
$("#cEmail").textContent = ME.email;
$("#cPhone").textContent = ME.phone;
$("#cLoc").textContent = ME.location;
$("#footer").textContent = `© ${new Date().getFullYear()} ${ME.name} · Built with HTML, CSS & JavaScript`;

/* ---------- Skills ---------- */
$("#skgrid").innerHTML = [["Technical", TECH, "acc"], ["Creative & Multimedia", CREATIVE, "ink"], ["Soft Skills", SOFT, "mute"]]
  .map(([t, items, c], i) => `<div class="rv" style="transition-delay:${i * 100}ms"><div class="card cb sk"><h3>${t}</h3><div class="chips">${chips(items, c)}</div></div></div>`).join("");

/* ---------- Projects ---------- */
$("#pgrid").innerHTML = PROJECTS.map((p, i) => `
  <div class="rv" style="transition-delay:${i * 90}ms">
    <article class="card proj">
      <div class="pimg">${pic({ src: find("projects", p.img), hint: `src/assets/projects/${p.img}.png`, ratio: "16/10", alt: p.title, title: p.title })}<span class="badge">${esc(p.cat)}</span></div>
      <div class="cb">
        <h3>${esc(p.title)}</h3><p class="mute">${esc(p.desc)}</p>
        <div class="chips">${chips(p.tech)}</div>
        <div class="row">
          <a class="btn sm" href="${esc(p.link || "#projects")}">View Project ${icon("arrowUpRight", 14)}</a>
          ${p.gh ? `<a class="btn sm ghost" href="${esc(p.gh)}" target="_blank" rel="noreferrer">${icon("github", 14)}Code</a>` : ""}
        </div>
      </div>
    </article>
  </div>`).join("");

/* ---------- Photojournalism ---------- */
$("#photoChips").innerHTML = chips(["Event Coverage", "Photography", "Composition", "Visual Storytelling", "Photo Documentation", "Deadline Management"]);
const photoItems = photos.length ? photos : Array.from({ length: 6 }, (_, i) => ({ file: "", url: "", ratio: [3 / 4, 1, 4 / 3][i % 3] }));
$("#photoGrid").innerHTML = photoItems.map((p, i) => {
  const info = PHOTO_INFO[p.file];
  return `<div class="rv" style="transition-delay:${(i % 3) * 80}ms"><figure class="shot">
    ${pic({ src: p.url, hint: "src/assets/photos/", ratio: p.url ? "" : String(p.ratio), alt: info?.event || "", title: info?.event || "" })}
    ${info ? `<figcaption><b>${esc(info.event)}</b><span>${esc([info.date, info.place].filter(Boolean).join(" · "))}</span>${info.desc ? `<p>${esc(info.desc)}</p>` : ""}</figcaption>` : ""}
  </figure></div>`;
}).join("");

/* ---------- Experience galleries ---------- */
const mini = (arr, hint) => (arr.length ? arr : [{}, {}, {}]).map((x) => pic({ src: x.url, hint })).join("");
$("#internGrid").innerHTML = mini(intern, "src/assets/internship/");
$("#agriGrid").innerHTML = mini(agri, "src/assets/agriculture/");

/* ---------- Certificates ---------- */
$("#cgrid").innerHTML = CERTS.map((c, i) => {
  const src = find("certificates", c.file);
  return `<div class="rv" style="transition-delay:${(i % 3) * 80}ms"><div class="card cert">
    ${pic({ src, hint: `src/assets/certificates/${c.file}.png`, alt: c.title, title: c.title })}
    <div class="cb"><h3>${esc(c.title)}</h3><p class="mute">${esc(c.org)}</p><p class="date">${esc(c.date)}</p>
    ${src ? `<button class="link" data-lb="${src}" data-title="${esc(c.title)}">View Certificate ${icon("arrowUpRight", 14)}</button>` : ""}</div>
  </div></div>`;
}).join("");

/* ---------- My Work (filterable) ---------- */
let filter = "All";
function renderWork() {
  $("#filters").innerHTML = ["All", ...Object.values(WORK_CATS)]
    .map((f) => `<button class="${filter === f ? "on" : ""}" data-f="${f}">${f}</button>`).join("");
  const shown = work.filter((w) => filter === "All" || w.cat === filter);
  $("#workWrap").innerHTML = work.length
    ? `<div class="masonry">${shown.map((w) => pic({ src: w.url, ratio: "", title: w.cat })).join("")}</div>`
    : `<div class="ph wide">${icon("plus", 18)}<small>No work images yet — put them in src/assets/work/</small></div>`;
}
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-f]");
  if (b) { filter = b.dataset.f; renderWork(); }
});
renderWork();

/* ---------- Contact form -> mailto ---------- */
$("#send").addEventListener("click", () => {
  const name = $("#fName").value, email = $("#fEmail").value, text = $("#fText").value;
  const body = `${text}\n\n— ${name} (${email})`;
  window.location.href = `mailto:${ME.email}?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${encodeURIComponent(body)}`;
});

/* ---------- Lightbox ---------- */
const lb = $("#lb");
function openLb(src, title) {
  $("#lbImg").src = src;
  $("#lbCap").textContent = title || "";
  lb.hidden = false;
}
const closeLb = () => { lb.hidden = true; $("#lbImg").src = ""; };
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-lb]");
  if (t && !lb.contains(t)) openLb(t.dataset.lb, t.dataset.title);
});
lb.addEventListener("click", (e) => { if (e.target !== $("#lbImg")) closeLb(); });
window.addEventListener("keydown", (e) => e.key === "Escape" && closeLb());

/* ---------- Mobile sidebar ---------- */
const side = $("#side"), burger = $("#burger");
const setMenu = (open) => {
  side.classList.toggle("open", open);
  burger.innerHTML = icon(open ? "x" : "menu", 20);
};
burger.addEventListener("click", () => setMenu(!side.classList.contains("open")));
$("#nav").addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

/* ---------- Icons, reveal-on-scroll, active nav ---------- */
hydrateIcons();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".rv").forEach((el) => reveal.observe(el));

const links = [...document.querySelectorAll("#nav a")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.dataset.id === e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
links.forEach((a) => { const el = document.getElementById(a.dataset.id); el && spy.observe(el); });
