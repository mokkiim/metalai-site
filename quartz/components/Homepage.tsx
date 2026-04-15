import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot, joinSegments } from "../util/path"

const Homepage: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const isIndex = fileData.slug === "index"
  if (!isIndex) return null

  const baseDir = pathToRoot(fileData.slug!)

  const recentPosts = [
    {
      date: "2026.04.13",
      title: "도메인 지식과 AI: 왜 전문가가 AI를 더 잘 쓰는가",
      tag: "Blog",
      href: joinSegments(baseDir, "blog/2026-04-13-domain-knowledge-and-ai"),
    },
    {
      date: "2026.04.10",
      title: "MCP (Model Context Protocol) 완전 가이드",
      tag: "Wiki",
      href: joinSegments(baseDir, "wiki/concepts/mcp-protocol"),
    },
    {
      date: "2026.04.08",
      title: "Claude Code로 뉴스레터 자동화 시스템 구축하기",
      tag: "Blog",
      href: joinSegments(baseDir, "blog"),
    },
    {
      date: "2026.04.05",
      title: "Vibe Coding (바이브 코딩) — 새로운 개발 패러다임",
      tag: "Wiki",
      href: joinSegments(baseDir, "wiki/concepts/vibe-coding"),
    },
  ]

  const socialLinks = [
    {
      icon: "▶",
      name: "YouTube",
      desc: "METAL AI LAB",
      href: "https://www.youtube.com/@metalailab",
    },
    {
      icon: "◎",
      name: "Instagram",
      desc: "AI 카드뉴스",
      href: "https://www.instagram.com/metalai.lab",
    },
    {
      icon: "@",
      name: "Threads",
      desc: "매일 AI 인사이트",
      href: "https://www.threads.net/@metalai.lab",
    },
    {
      icon: "✕",
      name: "X (Twitter)",
      desc: "AI 뉴스 & 트렌드",
      href: "https://x.com/metalailab",
    },
  ]

  return (
    <div class={`homepage ${displayClass ?? ""}`}>
      {/* HERO */}
      <div class="hero">
        <h1>METAL AI</h1>
        <div class="hero-subtitle">Work with AI, Build with AI</div>
        <p class="hero-description">
          AI 에이전트 시스템, 콘텐츠 자동화, 경험 디자인에 대한 주간 인사이트를 전합니다.
        </p>
      </div>

      <div class="home-divider"><hr /></div>

      {/* RECENT */}
      <div class="home-section">
        <div class="section-title">Recent</div>
        <div class="post-list">
          {recentPosts.map((post) => (
            <a class="post-item" href={post.href}>
              <span class="post-date">{post.date}</span>
              <span class="post-title-text">{post.title}</span>
              <span class="post-tag">{post.tag}</span>
            </a>
          ))}
        </div>
      </div>

      <div class="home-divider"><hr /></div>

      {/* LINKS */}
      <div class="home-section">
        <div class="section-title">Links</div>
        <div class="links-grid">
          {socialLinks.map((link) => (
            <a class="link-card" href={link.href} target="_blank" rel="noopener noreferrer">
              <span class="link-icon">{link.icon}</span>
              <div>
                <div class="link-name">{link.name}</div>
                <div class="link-desc">{link.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

Homepage.css = `
/* === HERO === */
.hero {
  max-width: var(--layout-width, 1100px);
  margin: 0 auto;
  padding: 80px 0 64px;
}

.hero h1 {
  font-family: 'Newsreader', serif;
  font-size: 56px;
  font-weight: 700;
  color: var(--color-text-primary, #1A1A1A);
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  color: var(--color-text-secondary, #6B6560);
  font-weight: 300;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
}

.hero-description {
  font-size: 17px;
  color: var(--color-text-secondary, #6B6560);
  max-width: 560px;
  line-height: 1.7;
}

/* === DIVIDER === */
.home-divider {
  max-width: var(--layout-width, 1100px);
  margin: 0 auto;
}

.home-divider hr {
  border: none;
  border-top: 1px solid var(--color-border-default, #E5DED4);
}

/* === SECTION === */
.home-section {
  max-width: var(--layout-width, 1100px);
  margin: 0 auto;
  padding: 48px 0;
}

.section-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-secondary, #6B6560);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 32px;
}

/* === POST LIST === */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.post-item {
  display: flex;
  align-items: baseline;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border-default, #E5DED4);
  text-decoration: none !important;
  color: inherit;
  transition: all 0.15s;
  cursor: pointer;
}

.post-item:first-child {
  border-top: 1px solid var(--color-border-default, #E5DED4);
}

.post-item:hover {
  background: var(--color-bg-tertiary, #F0E6D8);
  margin: 0 -16px;
  padding: 20px 16px;
}

.post-date {
  font-size: 14px;
  color: var(--color-text-secondary, #6B6560);
  min-width: 120px;
  font-variant-numeric: tabular-nums;
  font-family: 'Pretendard', sans-serif;
}

.post-title-text {
  font-family: 'Noto Serif KR', serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary, #1A1A1A);
  flex: 1;
}

.post-tag {
  font-size: 11px;
  color: var(--color-text-secondary, #6B6560);
  border: 1px solid var(--color-border-default, #E5DED4);
  padding: 2px 10px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: 16px;
  white-space: nowrap;
}

/* === LINKS GRID === */
.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border: 1px solid var(--color-border-default, #E5DED4);
  border-radius: 4px;
  text-decoration: none !important;
  color: var(--color-text-primary, #1A1A1A);
  transition: all 0.15s;
  background: var(--color-bg-secondary, #FAF8F4);
}

.link-card:hover {
  border-color: var(--brand-navy, #19297B);
}

.link-icon {
  font-size: 20px;
  width: 32px;
  text-align: center;
}

.link-name {
  font-weight: 500;
  font-size: 15px;
}

.link-desc {
  font-size: 13px;
  color: var(--color-text-secondary, #6B6560);
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .hero h1 { font-size: 36px; }
  .hero { padding: 48px 0 40px; }
  .links-grid { grid-template-columns: 1fr; }
  .post-item { flex-direction: column; gap: 4px; }
  .post-date { min-width: unset; }
  .post-tag { margin-left: 0; margin-top: 4px; }
}
`

export default (() => Homepage) satisfies QuartzComponentConstructor
