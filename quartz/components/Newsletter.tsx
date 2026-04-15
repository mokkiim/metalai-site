import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import newsletterStyle from "./styles/newsletter.scss"

interface Options {
  buttondownUsername: string
}

const defaultOptions: Options = {
  buttondownUsername: "metalai",
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Newsletter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`newsletter-container ${displayClass ?? ""}`}>
        <div class="newsletter-box">
          <h3 class="newsletter-title">SUBSCRIBE</h3>
          <p class="newsletter-desc">
            AI로 일하는 법을 연구하고 공유합니다. 매주 엄선한 AI 인사이트를 보내드립니다.
          </p>
          <form
            action={`https://buttondown.com/api/emails/embed-subscribe/${opts.buttondownUsername}`}
            method="post"
            target="popupwindow"
            class="newsletter-form"
          >
            <input type="email" name="email" placeholder="your@email.com" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    )
  }

  Newsletter.css = newsletterStyle
  return Newsletter
}) satisfies QuartzComponentConstructor
