const fs = require("fs");

let p = fs.readFileSync("C:\\temp\\page.tsx", "utf8");
if (p.includes("\0")) p = fs.readFileSync("C:\\temp\\page.tsx", "utf16le");
fs.writeFileSync("apps/web/app/page.tsx", p, "utf8");

let hc = fs.readFileSync("C:\\temp\\HomeClient.tsx", "utf8");
if (hc.includes("\0")) hc = fs.readFileSync("C:\\temp\\HomeClient.tsx", "utf16le");
hc = hc.replace(
  /import { X, ArrowRight, Trophy, Search, HelpCircle } from "lucide-react";?\r?\n/g,
  ""
);
hc = hc.replace(/import { X, ArrowRight, Trophy, Search, HelpCircle } from "lucide-react"/g, "");
hc = '"use client";\nimport { ArrowRight, Trophy, Search, HelpCircle } from "lucide-react";\n' + hc;
fs.writeFileSync("apps/web/components/HomeClient.tsx", hc, "utf8");
