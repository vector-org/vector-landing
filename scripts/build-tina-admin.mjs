import { readFileSync, writeFileSync } from "node:fs"
import { spawn } from "node:child_process"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const tinaCliIndex = require.resolve("@tinacms/cli/dist/index.js")

const original = readFileSync(tinaCliIndex, "utf8")
const broken = `"process.env": \`new Object(\${JSON.stringify(publicEnv)})\``
const fixed = `"process.env": JSON.stringify(publicEnv)`

if (original.includes(broken)) {
  writeFileSync(tinaCliIndex, original.replace(broken, fixed))
}

const args = process.argv.slice(2).filter((arg) => arg !== "--")

const child = spawn(process.execPath, [tinaCliIndex, "build", ...args], {
  stdio: "inherit",
  env: process.env
})

child.on("error", (error) => {
  console.error(error)
  process.exit(1)
})

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 0)
})
