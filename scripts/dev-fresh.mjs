import { existsSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";

const distDir = ".next-fresh";
const port = process.argv[2] ?? "3002";

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}

console.log(`Starting dev server on http://localhost:${port} with a clean ${distDir} cache.`);

const child = spawn("next", ["dev", "-p", port], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NEXT_DIST_DIR: distDir },
});

child.on("exit", (code) => process.exit(code ?? 0));
