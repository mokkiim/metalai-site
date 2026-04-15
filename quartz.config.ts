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
        header: "Press Start 2P",
        body: "Noto Sans KR",
        code: "VT323",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f5f6fa",
          gray: "#c0c4d6",
          darkgray: "#3a3f5c",
          dark: "#19297b",
          secondary: "#19297b",
          tertiary: "#3d4faa",
          highlight: "rgba(25, 41, 123, 0.06)",
          textHighlight: "#19297b22",
        },
        darkMode: {
          light: "#0a0e1a",
          lightgray: "#141830",
          gray: "#5a65a0",
          darkgray: "#d4d7e6",
          dark: "#eef0f8",
          secondary: "#7085db",
          tertiary: "#9aa8e8",
          highlight: "rgba(112, 133, 219, 0.10)",
          textHighlight: "#7085db33",
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
