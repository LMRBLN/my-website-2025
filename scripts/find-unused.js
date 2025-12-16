/**
 * Minimaler Runner: depcheck + eslint (unused vars/imports)
 *  - npm install (devDependencies) vor dem Ausführen notwendig
 *  - erzeugt ./analysis/unused-report.json und schreibt eine Kurzfassung in die Konsole
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'analysis');
const outFile = path.join(outDir, 'unused-report.json');

function run(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  } catch (err) {
    return { error: true, message: err.stderr ? err.stderr.toString() : err.message };
  }
}

(async () => {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log('1) Running depcheck (unused npm packages)...');
  const depcheckCmd = 'npx depcheck --json';
  const depResultRaw = run(depcheckCmd);
  let depResult;
  if (depResultRaw && depResultRaw.error) {
    console.error('depcheck failed:', depResultRaw.message);
    depResult = { error: depResultRaw.message };
  } else {
    try { depResult = JSON.parse(depResultRaw); } catch (e) { depResult = { parseError: depResultRaw }; }
  }

  console.log('2) Running eslint (find unused vars/imports in src)...');
  // eslint format json; if no findings, eslint exits 0 but returns empty array
  const eslintCmd = 'npx eslint --ext .js,.jsx,.ts,.tsx src -f json --no-ignore || true';
  const eslintRaw = run(eslintCmd);
  let eslintResult;
  if (eslintRaw && eslintRaw.error) {
    console.error('eslint failed:', eslintRaw.message);
    eslintResult = { error: eslintRaw.message };
  } else {
    try { eslintResult = JSON.parse(eslintRaw || '[]'); } catch (e) { eslintResult = { parseError: eslintRaw }; }
  }

  // Aggregate a small summary
  const summary = {
    timestamp: new Date().toISOString(),
    depcheck: {
      unusedDependencies: depResult.dependencies || [],
      unusedDevDependencies: depResult.devDependencies || [],
      missing: depResult.missing || []
    },
    eslint: {
      filesWithMessages: Array.isArray(eslintResult) ? eslintResult.length : 0,
      details: eslintResult
    },
    notes: [
      'Large vendored files (e.g. public/pdf.worker.min.mjs) may be reported as used by packages or may be excluded from analysis.',
      'CSS/class usage is not detected by this script. Use PurgeCSS / manual inspection for unused CSS rules.',
      'XFA / template files (XML) and runtime‑loaded assets may require manual checking.'
    ]
  };

  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2), 'utf8');
  console.log(`Report written: ${outFile}`);

  // Print a concise console summary
  console.log('--- Quick summary ---');
  console.log(`depcheck: ${ (summary.depcheck.unusedDependencies.length + summary.depcheck.unusedDevDependencies.length) } unused packages found`);
  if (summary.depcheck.unusedDependencies.length) console.log('  unused dependencies:', summary.depcheck.unusedDependencies.slice(0,10));
  if (summary.depcheck.unusedDevDependencies.length) console.log('  unused devDependencies:', summary.depcheck.unusedDevDependencies.slice(0,10));
  if (summary.depcheck.missing && Object.keys(summary.depcheck.missing).length) {
    console.log('  missing packages (used but not installed):', Object.keys(summary.depcheck.missing).slice(0,10));
  }
  console.log(`eslint: files with messages: ${ summary.eslint.filesWithMessages }`);
  if (summary.eslint.filesWithMessages) {
    const files = summary.eslint.details
      .filter(f => f.messages && f.messages.length)
      .map(f => ({ filePath: f.filePath, messages: f.messages.length }));
    console.log('  top files with eslint messages:', files.slice(0,8));
    console.log('  (open analysis/unused-report.json for full details)');
  }
  console.log('Done.');
})();
