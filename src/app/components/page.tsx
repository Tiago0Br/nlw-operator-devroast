import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CodeBlock } from '@/components/ui/code-block'
import { DiffLine } from '@/components/ui/diff-line'
import { ScoreRing } from '@/components/ui/score-ring'
import { TableRow } from '@/components/ui/table-row'
import { Toggle } from '@/components/ui/toggle'

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-bg-page flex flex-col items-center justify-center gap-16 p-16">
      {/* Buttons */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// buttons'}
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              variant="primary"
            </span>
            <div className="flex items-center gap-4">
              <Button variant="primary" size="sm">
                $ roast_my_code
              </Button>
              <Button variant="primary" size="md">
                $ roast_my_code
              </Button>
              <Button variant="primary" size="lg">
                $ roast_my_code
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              variant="secondary"
            </span>
            <div className="flex items-center gap-4">
              <Button variant="secondary" size="sm">
                $ share_roast
              </Button>
              <Button variant="secondary" size="md">
                $ share_roast
              </Button>
              <Button variant="secondary" size="lg">
                $ share_roast
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              variant="ghost"
            </span>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                $ view_all &gt;&gt;
              </Button>
              <Button variant="ghost" size="md">
                $ view_all &gt;&gt;
              </Button>
              <Button variant="ghost" size="lg">
                $ view_all &gt;&gt;
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4 border-t border-bg-elevated">
            <span className="font-mono text-text-tertiary text-xs">
              disabled
            </span>
            <div className="flex items-center gap-4">
              <Button variant="primary" disabled>
                $ roast_my_code
              </Button>
              <Button variant="secondary" disabled>
                $ share_roast
              </Button>
              <Button variant="ghost" disabled>
                $ view_all &gt;&gt;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// toggle'}
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              defaultChecked=true
            </span>
            <Toggle defaultChecked label="roast mode" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              defaultChecked=false
            </span>
            <Toggle label="roast mode" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              disabled
            </span>
            <div className="flex items-center gap-8">
              <Toggle defaultChecked label="roast mode" disabled />
              <Toggle label="roast mode" disabled />
            </div>
          </div>
        </div>
      </section>

      {/* Badge */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// badge_status'}
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              size="sm" (padrão)
            </span>
            <div className="flex items-center gap-6">
              <Badge variant="critical">critical</Badge>
              <Badge variant="warning">warning</Badge>
              <Badge variant="good">good</Badge>
              <Badge variant="verdict">needs_serious_help</Badge>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              size="md"
            </span>
            <div className="flex items-center gap-6">
              <Badge variant="critical" size="md">
                critical
              </Badge>
              <Badge variant="warning" size="md">
                warning
              </Badge>
              <Badge variant="good" size="md">
                good
              </Badge>
              <Badge variant="verdict" size="md">
                needs_serious_help
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CodeBlock */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// code_block'}
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              lang="javascript" filename="calculate.js"
            </span>
            <CodeBlock
              lang="javascript"
              filename="calculate.js"
              code={`function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
}`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-text-tertiary text-xs">
              lang="typescript" (sem filename)
            </span>
            <CodeBlock
              lang="typescript"
              code={`type User = {
  id: string
  name: string
  role: 'admin' | 'user'
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`)
  return res.json()
}`}
            />
          </div>
        </div>
      </section>

      {/* DiffLine */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// diff_line'}
        </h2>

        <div className="flex flex-col w-full border border-border-primary">
          <DiffLine variant="context" code="function calculateTotal(items) {" />
          <DiffLine variant="removed" code="var total = 0;" />
          <DiffLine variant="added" code="const total = 0;" />
          <DiffLine
            variant="context"
            code="  for (let i = 0; i < items.length; i++) {"
          />
          <DiffLine variant="context" code="    total += items[i].price" />
          <DiffLine variant="context" code="  }" />
          <DiffLine variant="context" code="}" />
        </div>
      </section>

      {/* Cards */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// cards'}
        </h2>

        <div className="flex flex-col gap-4">
          <Card
            variant="critical"
            label="critical"
            title="using var instead of const/let"
            description="the var keyword is function-scoped rather than block-scoped, which can lead to unexpected behavior and bugs."
          />
          <Card
            variant="warning"
            label="warning"
            title="missing error handling in async function"
            description="async functions should always handle rejections to prevent unhandled promise exceptions."
          />
          <Card
            variant="good"
            label="good"
            title="proper use of const for immutable bindings"
            description="using const correctly signals intent and prevents accidental reassignment."
          />
        </div>
      </section>

      {/* TableRow */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// table_row'}
        </h2>

        <div className="flex flex-col w-full">
          <TableRow
            variant="critical"
            rank="#1"
            score="2.1"
            codePreview="function calculateTotal(items) { var total = 0; ..."
            lang="javascript"
          />
          <TableRow
            variant="warning"
            rank="#2"
            score="5.4"
            codePreview="async function fetchUser(id) { return fetch('/api/users/' + id) ..."
            lang="typescript"
          />
          <TableRow
            variant="good"
            rank="#3"
            score="8.7"
            codePreview="const sum = (a: number, b: number): number => a + b"
            lang="typescript"
          />
        </div>
      </section>

      {/* ScoreRing */}
      <section className="flex flex-col gap-8 w-full max-w-2xl">
        <h2 className="font-mono text-accent-green text-xs font-bold">
          {'// score_ring'}
        </h2>

        <div className="flex items-center gap-10">
          <ScoreRing score={3.5} />
          <ScoreRing score={6} />
          <ScoreRing score={9.2} />
          <ScoreRing score={0} />
        </div>
      </section>
    </main>
  )
}
