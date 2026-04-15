import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Newsletter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`newsletter-section ${displayClass ?? ""}`}>
      <div class="newsletter-inner">
        <h3 class="newsletter-title">뉴스레터 구독하기</h3>
        <p class="newsletter-desc">
          AI로 일하는 법을 연구하고 공유합니다.
          <br />
          매주 엄선한 AI 인사이트를 보내드립니다.
        </p>
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/metalai"
          method="post"
          target="popupwindow"
          class="newsletter-form"
        >
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            class="newsletter-input"
          />
          <button type="submit" class="newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

Newsletter.css = `
.newsletter-section {
  max-width: 560px;
  margin: 3rem auto 0;
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid var(--lightgray);
}

.newsletter-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: var(--darkgray);
}

.newsletter-desc {
  color: var(--gray);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 0;
  max-width: 420px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 0.7rem 1rem;
  border: 1px solid var(--lightgray);
  border-right: none;
  background: var(--light);
  font-family: 'Pretendard', -apple-system, sans-serif;
  font-size: 0.95rem;
  color: var(--darkgray);
  border-radius: 4px 0 0 4px;
  outline: none;
  transition: border-color 0.15s;
}

.newsletter-input:focus {
  border-color: #19297B;
}

.newsletter-input::placeholder {
  color: var(--gray);
}

.newsletter-btn {
  padding: 0.7rem 1.5rem;
  background: #19297B;
  color: white;
  border: 1px solid #19297B;
  font-family: 'Pretendard', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  transition: background 0.15s;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background: #0F1A52;
}

@media (max-width: 800px) {
  .newsletter-form {
    flex-direction: column;
    gap: 8px;
  }

  .newsletter-input {
    border-right: 1px solid var(--lightgray);
    border-radius: 4px;
  }

  .newsletter-btn {
    border-radius: 4px;
  }
}
`

export default (() => Newsletter) satisfies QuartzComponentConstructor
