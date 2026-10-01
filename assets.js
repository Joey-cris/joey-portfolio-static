/* Image manifest. A static page cannot scan folders, so list every file here.
   To add an image: drop it in src/assets/<folder>/ and add its filename below. */
const ASSETS = {
  "agriculture": [
    "agriculture.jpg"
  ],
  "certificates": [
    "ai-scam-awareness.png",
    "digital-marketing.png",
    "java-armada.png",
    "logo-design.png",
    "ojt-armada.png",
    "qgis.png"
  ],
  "internship": [
    "intern1.jpg",
    "intern2.png",
    "intern3.png"
  ],
  "photos": [
    "Event Coverage.jpg",
    "photo1.png",
    "photo2.jpg",
    "photo3.jpg",
    "photo.jpg",
    "Visual Storytelling.jpg"
  ],
  "profile": [
    "profile.jpg"
  ],
  "projects": [
    "attendance.png",
    "payroll.png",
    "van.png"
  ],
  "work": [
    "attendance.png",
    "Event Coverage.jpg",
    "intern1.jpg",
    "intern2.png",
    "intern3.png",
    "payroll.png",
    "photo1.png",
    "photo2.jpg",
    "photo3.jpg",
    "photo.jpg",
    "van.png",
    "Visual Storytelling.jpg"
  ]
};

const assetUrl = (folder, file) => "src/assets/" + folder + "/" + encodeURIComponent(file);

/* All images in a folder -> [{file, url}] */
function list(folder) {
  return (ASSETS[folder] || []).map((file) => ({ file, url: assetUrl(folder, file) }));
}

/* One image by base name (no extension) */
function find(folder, base) {
  const hit = list(folder).find((x) => x.file.replace(/\.[^.]+$/, "") === base);
  return hit ? hit.url : undefined;
}
