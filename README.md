# Projekt Analyse: Unbenutzte Elemente finden

Kurzanleitung:
1. Installiere dev‑Dependencies:
   npm install

2. Führe die Analyse aus:
   npm run analyze-unused

Ergebnis:
- Ein Report wird unter `analysis/unused-report.json` angelegt.
- `depcheck` identifiziert unbenutzte NPM‑Pakete.
- `eslint` meldet unbenutzte Variablen / Imports in `src`.

Wichtige Hinweise:
- CSS‑Klassen: nicht von diesem Skript erfasst — für CSS‑Analyse PurgeCSS verwenden.
- Drittanbieter / vendor‑Dateien (z. B. `public/pdf.worker.min.mjs`) und dynamisch geladene Assets benötigen manuelles Review.
- Leere/Platzhalter‑Dateien in `src/pages` erscheinen als unbenutzt — prüfe, ob sie absichtlich leer sind.
