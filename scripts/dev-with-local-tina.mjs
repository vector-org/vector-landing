import { spawn } from "node:child_process"

const child = spawn('tinacms dev -c "next dev"', {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    TINA_PUBLIC_IS_LOCAL: "true"
  }
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
