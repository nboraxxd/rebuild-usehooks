import { useCopyToClipboard } from '@/page/UseCopyToClipboard/hooks'
import { copyIcon, checkIcon } from './icons'
import theme from '@/theme.module.css'
import style from './UseCopyToClipboard.module.css'

const randomHash = crypto.randomUUID()

export default function App() {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const hasCopiedText = Boolean(copiedText)

  return (
    <section className={style.section}>
      <h1>useCopyToClipboard</h1>
      <article className={style.article}>
        <label>Fake API Key</label>
        <div>
          <pre className={style.pre}>
            <code>{randomHash}</code>
          </pre>
          <button disabled={hasCopiedText} className={theme.link} onClick={() => copyToClipboard(randomHash)}>
            {hasCopiedText ? checkIcon : copyIcon}
          </button>
        </div>
      </article>
      {hasCopiedText && (
        <dialog className={style.dialog} open={hasCopiedText}>
          <h4>
            Copied{' '}
            <span role="img" aria-label="Celebrate Emoji">
              🎉
            </span>
          </h4>
          <textarea placeholder="Paste your copied text" />
        </dialog>
      )}
    </section>
  )
}
