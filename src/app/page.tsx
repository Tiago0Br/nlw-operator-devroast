import Link from 'next/link'
import { CodeBlock } from '@/components/ui/code-block'
import { Toggle } from '@/components/ui/toggle'

const SAMPLE_CODE = `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }

  if (total > 100) {
    console.log("discount applied");
    total = total * 0.9;
  }

  // TODO: handle tax calculation
  // TODO: handle currency conversion

  return total;
}`

type LeaderboardRow = {
  rank: string
  rankColor: string
  score: string
  codeLines: { text: string; muted?: boolean }[]
  lang: string
}

const LEADERBOARD_ROWS: LeaderboardRow[] = [
  {
    rank: '1',
    rankColor: 'text-accent-amber',
    score: '1.2',
    codeLines: [
      { text: 'eval(prompt("enter code"))' },
      { text: 'document.write(response)' },
      { text: '// trust the user lol', muted: true }
    ],
    lang: 'javascript'
  },
  {
    rank: '2',
    rankColor: 'text-text-secondary',
    score: '1.8',
    codeLines: [
      { text: 'if (x == true) { return true; }' },
      { text: 'else if (x == false) { return false; }' },
      { text: 'else { return !false; }' }
    ],
    lang: 'typescript'
  },
  {
    rank: '3',
    rankColor: 'text-text-secondary',
    score: '2.1',
    codeLines: [
      { text: 'SELECT * FROM users WHERE 1=1' },
      { text: '-- TODO: add authentication', muted: true }
    ],
    lang: 'sql'
  }
]

export default async function HomePage() {
  return (
    <main className="flex flex-col items-center gap-8 pt-16 md:pt-20 px-6 md:px-10 pb-20">
      {/* Hero */}
      <div className="flex flex-col gap-3 w-full max-w-[780px]">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="font-mono text-3xl md:text-4xl font-bold text-accent-green leading-tight">
            $
          </span>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            paste your code. get roasted.
          </h1>
        </div>
        <p className="font-sans text-sm text-text-secondary">
          {
            "// drop your code below and we'll rate it — brutally honest or full roast mode"
          }
        </p>
      </div>

      {/* Code editor */}
      <div className="w-full max-w-[780px]">
        <CodeBlock lang="javascript" code={SAMPLE_CODE} />
      </div>

      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full max-w-[780px]">
        <div className="flex items-center gap-4">
          <Toggle defaultChecked label="roast mode" />
          <span className="font-sans text-xs text-text-tertiary hidden sm:block">
            {'// maximum sarcasm enabled'}
          </span>
        </div>

        <button
          type="button"
          className="font-mono text-sm font-medium text-bg-page bg-accent-green px-6 py-2.5 hover:opacity-90 active:opacity-80 transition-opacity cursor-pointer"
        >
          $ roast_my_code
        </button>
      </div>

      {/* Footer hint */}
      <div className="flex items-center gap-6 w-full max-w-[780px] justify-center">
        <span className="font-sans text-xs text-text-tertiary">
          2,847 codes roasted
        </span>
        <span className="font-mono text-xs text-text-tertiary">·</span>
        <span className="font-sans text-xs text-text-tertiary">
          avg score: 4.2/10
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8 md:h-14 w-full" />

      {/* Leaderboard preview */}
      <div className="flex flex-col gap-6 w-full max-w-[960px]">
        {/* Section header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-accent-green">
                {'//'}
              </span>
              <h2 className="font-mono text-sm font-bold text-text-primary">
                shame_leaderboard
              </h2>
            </div>
            <p className="font-sans text-sm text-text-tertiary">
              {'// the worst code on the internet, ranked by shame'}
            </p>
          </div>

          <Link
            href="/leaderboard"
            className="font-mono text-xs text-text-secondary border border-border-primary px-3 py-1.5 hover:border-border-hover hover:text-text-primary transition-colors shrink-0"
          >
            $ view_all &gt;&gt;
          </Link>
        </div>

        {/* Table */}
        <div className="border border-border-primary overflow-hidden">
          {/* Table header */}
          <div className="flex items-center h-10 px-5 bg-bg-surface border-b border-border-primary">
            <span className="font-mono text-xs font-medium text-text-tertiary w-[50px] shrink-0">
              #
            </span>
            <span className="font-mono text-xs font-medium text-text-tertiary w-[70px] shrink-0">
              score
            </span>
            <span className="font-mono text-xs font-medium text-text-tertiary flex-1">
              code
            </span>
            <span className="font-mono text-xs font-medium text-text-tertiary w-[100px] shrink-0 text-right hidden sm:block">
              lang
            </span>
          </div>

          {/* Rows */}
          {LEADERBOARD_ROWS.map((row, i) => (
            <div
              key={row.rank}
              className={`flex items-start px-5 py-4 ${i < LEADERBOARD_ROWS.length - 1 ? 'border-b border-border-primary' : ''}`}
            >
              <span
                className={`font-mono text-xs w-[50px] shrink-0 pt-0.5 ${row.rankColor}`}
              >
                {row.rank}
              </span>
              <span className="font-mono text-xs font-bold text-accent-red w-[70px] shrink-0 pt-0.5">
                {row.score}
              </span>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                {row.codeLines.map(line => (
                  <span
                    key={`${row.rank}-${line.text}`}
                    className={`font-mono text-xs truncate ${line.muted ? 'text-text-tertiary' : 'text-text-primary'}`}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-text-secondary w-[100px] shrink-0 pt-0.5 text-right hidden sm:block">
                {row.lang}
              </span>
            </div>
          ))}
        </div>

        {/* Fade hint */}
        <div className="flex justify-center">
          <span className="font-sans text-xs text-text-tertiary">
            showing top 3 of 2,847 · view full leaderboard &gt;&gt;
          </span>
        </div>
      </div>
    </main>
  )
}
