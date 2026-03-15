import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'

type CodeBlockProps = {
  code: string
  lang: BundledLanguage
  filename?: string
  className?: string
}

export async function CodeBlock({
  code,
  lang,
  filename,
  className
}: CodeBlockProps) {
  const lines = code.split('\n')

  const html = await codeToHtml(code, {
    lang,
    theme: 'vesper'
  })

  return (
    <div
      className={`font-mono border border-border-primary overflow-hidden ${className ?? ''}`}
      style={{ background: '#101010' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 h-10 px-4 border-b border-border-primary">
        <span className="size-2.5 rounded-full bg-accent-red shrink-0" />
        <span className="size-2.5 rounded-full bg-accent-amber shrink-0" />
        <span className="size-2.5 rounded-full bg-accent-green shrink-0" />
        <span className="flex-1" />
        {filename && (
          <span className="text-text-tertiary text-xs">{filename}</span>
        )}
      </div>

      {/* Body */}
      <div className="flex">
        {/* Line numbers */}
        <div
          className="flex flex-col items-end gap-1.5 px-2.5 py-3 border-r border-border-primary shrink-0 select-none"
          style={{ background: '#0f0f0f', minWidth: '2.5rem' }}
        >
          {lines.map((_, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: line numbers are positional by nature
              key={i}
              className="text-text-tertiary text-[13px] leading-[1.5]"
            >
              {i + 1}
            </span>
          ))}
        </div>

        {/* Highlighted code — shiki injects inline styles, reset pre/code defaults */}
        <div
          className="flex-1 overflow-x-auto [&>pre]:!bg-transparent [&>pre]:p-3 [&>pre]:m-0 [&>pre]:text-[13px] [&>pre]:leading-[1.5] [&>pre>code]:block"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted output from shiki
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
