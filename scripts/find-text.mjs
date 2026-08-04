import fs from "fs";
const t = fs.readFileSync("dpm-page.html", "utf8");
const idx = t.indexOf("Connect");
console.log("idx", idx);
console.log(t.slice(Math.max(0, idx - 100), idx + 400));
const br = t.replace(/></g, ">\n<");
fs.writeFileSync("dpm-formatted.html", br);
