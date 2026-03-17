import Link from 'next/link'

export function Navbar() {
  return (
    <header className="flex items-center justify-between h-14 px-6 md:px-10 bg-bg-page border-b border-border-primary shrink-0">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-mono text-xl font-bold text-accent-green leading-none">
          &gt;
        </span>
        <span className="font-mono text-lg font-medium text-text-primary leading-none">
          devroast
        </span>
      </Link>

      <nav>
        <Link
          href="/leaderboard"
          className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          leaderboard
        </Link>
      </nav>
    </header>
  )
}
