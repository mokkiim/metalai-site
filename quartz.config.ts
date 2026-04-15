import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "METAL AI",
    pageTitleSuffix: " | METAL AI",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-XXXXXXXXXX",
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
        header: "Noto Sans KR",
        body: "Noto Sans KR",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f0f0f0",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#1a1a1a",
          secondary: "#0066ff",
          tertiary: "#4d94ff",
          highlight: "rgba(0, 102, 255, 0.08)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0d0d0d",
          lightgray: "#1a1a1a",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#4d94ff",
          tertiary: "#80b3ff",
          highlight: "rgba(77, 148, 255, 0.12)",
          textHighlight: "#b3aa0288",
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
