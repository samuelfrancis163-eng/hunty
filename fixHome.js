const fs = require("fs");
let hc = fs.readFileSync("apps/web/components/HomeClient.tsx", "utf8");
hc = hc.replace(
  /import { X, ArrowRight, Trophy, Search, HelpCircle } from "lucide-react";?\r?\n/g,
  ""
);
hc = hc.replace(/import { X, ArrowRight, Trophy, Search, HelpCircle } from "lucide-react"/g, "");
hc = '"use client";\nimport { ArrowRight, Trophy, Search, HelpCircle } from "lucide-react";\n' + hc;
fs.writeFileSync("apps/web/components/HomeClient.tsx", hc);
