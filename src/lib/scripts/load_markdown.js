import unified from 'unified'

import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'

import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import toc from '@jsdevtools/rehype-toc'

import { h } from "hastscript"
let processor = unified()
  .use(remarkParse)
  // @ts-ignore
  .use(remarkSlug)
  .use(remarkGfm)
  .use(remarkRehype)
  .data('settings', { fragment: true })
  .use(rehypeHighlight)
  .use(rehypeStringify)
  // @ts-ignore
  .use(rehypeSlug)
  .use(toc, {
    headings: ["h1", "h2", "h3"],     // Only include <h1> and <h2> headings in the TOC
    cssClasses: {
      // toc: "page-outline",      // Change the CSS class for the TOC
      // link: "page-link",        // Change the CSS class for links in the TOC
    }
  })
  // @ts-ignore
  .use(rehypeAutolinkHeadings, {
    type: 'element',
    tagName: 'a',
    properties: {
      className: ['anchor']
    },
    content() {
      return [
        h('span.octicon-link', {
          alt: 'link',
          title: 'link',
        }),
      ]
    }
  })


export async function process(content) {
  let html = await processor.processSync(content)
  // console.log(content)
  return html
}
