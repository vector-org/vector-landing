"use client"

export default function DownloadButton({ short = false }: { short?: boolean }) {
  const label = short ? "Download" : "Download VECTOR"

  return (
    <a
      href="https://apps.microsoft.com/detail/xp99t6mc32lq3b?cid=PCCongratsBnr&hl=en-US"
      download
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {label}
    </a>
  )
}

