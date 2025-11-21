import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({
      showReadingTime: false,
    }),
    Component.TagList(),
  ],
  left: [
    /*Component.PageTitle(),
    Component.Darkmode(),*/
    Component.Flex({
      components: [
        { Component: Component.PageTitle() },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(Component.RecentNotes({
      showTags: false,
      limit: 5,
    })),
    Component.MobileOnly(Component.Spacer()),
/*    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }), */
    Component.Explorer({
      //useSavedState: false,
      folderDefaultState: "open",
    }),
  ],
  right: [

    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
/*  afterBody: [
  Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'dmvProjects/dmv',
      // from data-repo-id
      repoId: 'R_kgDOQQZEYQ',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOQQZEYc4CxrJU',
      // from data-lang
      lang: 'ru'
      }
    }),
  ], */
  afterBody: [
      Component.Remark42Comments(),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.Flex({
      components: [
        { Component: Component.PageTitle() },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(Component.RecentNotes({
      showTags: false,
      limit: 5,
    })),
    Component.MobileOnly(Component.Spacer()),
    /*Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),*/
    Component.Explorer({
      //useSavedState: false,
      folderDefaultState: "open",
    }),
  ],
  right: [],
}
