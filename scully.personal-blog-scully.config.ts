import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { NotionDom, NotionDomPluginOptions, NotionDomRouter } from '@notion-stuff/scully-plugin-notion';
import { timeToRead, timeToReadOptions } from 'scully-plugin-time-to-read';
import '@scullyio/scully-plugin-puppeteer';

setPluginConfig(NotionDom, {
  notionBlocksHtmlParserOptions: {
    mdHighlightingOptions: 'prismjs',
  },
} as NotionDomPluginOptions);

setPluginConfig(timeToRead, {
  path: '/blog',
} as timeToReadOptions);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'personal-blog-scully',
  outDir: './dist/static',
  defaultPostRenderers: [MinifyHtml, getHttp404Plugin(), 'seoHrefOptimise', 'lazyImages'],
  routes: {
    '/blog/:slug': {
      type: NotionDomRouter,
      postRenderers: [NotionDom],
      databaseId: 'c7afb6392a0b463fb2315a79206378e3',
      notionApiKey: 'secret_ehCaJxfzKzG9qNb7HuCvArsfcOny1FTrUU4ZOg9STVa',
      basePath: '/blog', // optional, should match your route here
      titleSuffix: '', // optional
      slugKey: 'slug', // optional
    },
  },
};
