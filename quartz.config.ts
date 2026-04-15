import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "METAL AI",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-37CDSVCN7P",
    },
    locale: "ko-KR",
    baseUrl: "metalai.co.kr",
    ignorePatterns: [
      "private", "templates", ".obsidian",
      "00-Inbox", "00-System", "04-Templates",
      "05-Archive", "06-Converted", "06-Converted, Parsing",
      ".claude", "GA4-Reports", "미팅노트",
      "Clippings", "BRAT-log.md", "CLAUDE.md", "환영합니다!.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif KR",
        body: "Pretendard",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F5F0E8",
          lightgray: "#E5DED4",
          gray: "#C8BFB2",
          darkgray: "#1A1A1A",
          dark: "#1A1A1A",
          secondary: "#19297B",
          tertiary: "#2D3F9E",
          highlight: "rgba(25, 41, 123, 0.06)",
          textHighlight: "#F0E6D8",
        },
        darkMode: {
          light: "#1A1714",
          lightgray: "#3A3430",
          gray: "#7B7570",
          darkgray: "#F5F0E8",
          dark: "#F5F0E8",
          secondary: "#7B8FDB",
          tertiary: "#9AA8E8",
          highlight: "rgba(123, 143, 219, 0.10)",
          textHighlight: "#2E2820",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
