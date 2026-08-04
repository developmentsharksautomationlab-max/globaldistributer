import fs from "fs";
const t = fs.readFileSync("dpm-page.html", "utf8");
const paths = new Set();
for (const m of t.matchAll(/"(https:\/\/dpmdistribution\.us)?(\/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|webp|svg|ico|gif|woff2?))"/g)) {
  paths.add(m[2]);
}
for (const m of t.matchAll(/"(\/row-[^"]+)"/g)) paths.add(m[1]);
for (const m of t.matchAll(/"(\/brands[^"]*)"/g)) paths.add(m[1]);
for (const m of t.matchAll(/"(\/logo[^"]*)"/g)) paths.add(m[1]);
for (const m of t.matchAll(/"(\/hero[^"]*)"/g)) paths.add(m[1]);
for (const m of t.matchAll(/"(\/row[^"]*\.png)"/g)) paths.add(m[1]);
console.log([...paths].sort().join("\n"));
