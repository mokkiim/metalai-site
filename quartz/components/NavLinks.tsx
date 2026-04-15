import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments } from "../util/path"

const NavLinks: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const links = [
    { name: "Home", href: baseDir },
    { name: "Blog", href: joinSegments(baseDir, "blog") },
    { name: "Education", href: joinSegments(baseDir, "education") },
    { name: "Wiki", href: joinSegments(baseDir, "wiki") },
    { name: "About", href: joinSegments(baseDir, "about") },
  ]

  return (
    <nav class={`site-nav ${displayClass ?? ""}`}>
      <a href={baseDir} class="site-logo">METAL AI</a>
      <ul class="nav-links">
        {links.map((link) => (
          <li>
            <a href={link.href} class="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavLinks.css = `
.site-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.site-logo {
  font-family: 'Newsreader', serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--brand-navy, #19297B);
  text-decoration: none !important;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}

.site-logo:hover {
  color: var(--brand-navy-dark, #0F1A52);
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-text-secondary, #6B6560);
  text-decoration: none !important;
  font-size: 15px;
  font-weight: 400;
  font-family: var(--font-body, 'Pretendard', sans-serif);
  transition: color 0.15s;
}

.nav-link:hover {
  color: var(--color-text-primary, #1A1A1A);
}

@media (max-width: 800px) {
  .nav-links {
    gap: 16px;
    flex-wrap: wrap;
  }
  .nav-link {
    font-size: 14px;
  }
  .site-logo {
    font-size: 18px;
  }
}
`

export default (() => NavLinks) satisfies QuartzComponentConstructor
