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
    <nav class={`nav-links ${displayClass ?? ""}`}>
      {links.map((link) => (
        <a href={link.href} class="nav-link">
          {link.name}
        </a>
      ))}
    </nav>
  )
}

NavLinks.css = `
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
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
}
`

export default (() => NavLinks) satisfies QuartzComponentConstructor
