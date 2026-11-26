const fs = require('node:fs');
const path = require('node:path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// Reframes a production failure as an over-instrumented learning event.
fs.writeFileSync(path.join(outDir, 'entry.txt'), "I didn't break production. I promoted it to a learning opportunity with full observability and an audience.\n", 'utf8');
