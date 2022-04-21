// const list = {
//     "language": "en",
//     "pages": [
//         {
//             "slug": "test-page-markdown",
//             "title": "Testing markdown",
//             "description": "This is a test page",
//             "keywords": ["markdown", "test", "page", "aaaa"],
//             "file": "test.md"
//         },
//         {
//             "group": true,
//             "title": "Тест групп 1",
//             "children": [
//                 {
//                     "slug": "test-page-markdown-group",
//                     "title": "Testing markdown from group",
//                     "description": "This is a test page from group",
//                     "keywords": ["markdown", "test", "page", "aaaa"],
//                     "file": "test.md"
//                 },
//                 {
//                     "group": true,
//                     "title": "Тест групп 2",
//                     "children": []
//                 }
//             ]
//         }
//     ]
// }
export function parsePages(pages) {
    const pages_tree = []
    pages.forEach(page => {
        if (page.group) {
            pages_tree.push({
                title: page.title,
                children: parsePages(page.children)
            })
        } else {
            pages_tree.push({
                title: page.title,
                slug: page.slug,
                description: page.description,
                keywords: page.keywords,
                file: page.file
            })
        }
    })
    return pages_tree
}
export function findSlug(pages, slug_string) {
    let slug
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].slug === slug_string) {
            slug = pages[i]
            break
        } else if (pages[i].children) {
            slug = findSlug(pages[i].children, slug_string)
            if (slug) {
                break
            }
        }
    }
    return slug
}
// console.log(findSlug(list.pages, "test-page-markdown-group"))