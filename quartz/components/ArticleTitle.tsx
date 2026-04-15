import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot, joinSegments } from "../util/path"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    const isIndex = fileData.slug === "index"
    if (isIndex) {
      const baseDir = pathToRoot(fileData.slug!)
      const logoPath = joinSegments(baseDir, "static/logo.png")
      return (
        <h1 class={classNames(displayClass, "article-title article-title-logo")}>
          <img src={logoPath} alt={title} class="article-logo-img" />
        </h1>
      )
    }
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
.article-title-logo {
  text-align: left;
}
.article-logo-img {
  height: 40px;
  width: auto;
  border-radius: 0 !important;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
