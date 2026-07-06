import { existsSync, readdirSync, rmSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const target = process.argv[2] ?? ".next";

if (!existsSync(target)) {
  console.log(`No ${target} folder found.`);
  process.exit(0);
}

function removeEntry(entryPath) {
  if (!existsSync(entryPath)) return { removed: true };

  const stats = statSync(entryPath);

  if (!stats.isDirectory()) {
    try {
      unlinkSync(entryPath);
      return { removed: true };
    } catch (error) {
      return { removed: false, error, path: entryPath };
    }
  }

  const locked = [];

  for (const name of readdirSync(entryPath)) {
    const result = removeEntry(join(entryPath, name));
    if (!result.removed) locked.push(result);
  }

  try {
    rmSync(entryPath, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
    return { removed: locked.length === 0, locked };
  } catch (error) {
    return { removed: false, error, path: entryPath, locked };
  }
}

let lastError;

for (let attempt = 1; attempt <= 8; attempt += 1) {
  const result = removeEntry(target);

  if (result.removed && !existsSync(target)) {
    console.log(`Removed ${target} successfully.`);
    process.exit(0);
  }

  if (!existsSync(target)) {
    console.log(`Removed ${target} successfully.`);
    process.exit(0);
  }

  lastError = result.error ?? result.locked?.[0]?.error;

  try {
    rmSync(target, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });

    if (!existsSync(target)) {
      console.log(`Removed ${target} successfully.`);
      process.exit(0);
    }
  } catch (error) {
    lastError = error;
  }

  console.warn(`Attempt ${attempt}/8 failed. Retrying...`);
  await new Promise((resolve) => setTimeout(resolve, 400));
}

console.error(
  `Could not fully remove ${target}. Stop all Node/Next dev servers (Ctrl+C in the terminal running npm run dev), then run: npm run clean`,
);

if (lastError) {
  console.error(lastError);
}

process.exit(1);
