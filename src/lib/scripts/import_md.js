import { process } from '$lib/scripts/load_markdown'
import { loadStaticDocsFile, loadFromRemote } from '$lib/scripts/file_utils'
export async function importMarkdown(file_path) {
    const response = await loadStaticDocsFile(file_path)
    let html = null
    if (response.status === 200)
        html = await process(response.result)

    return { response, html }
}
export async function importRemoteMarkdown(file_path) {
    const response = await loadFromRemote(file_path)
    let html = null
    if (response.status === 200)
        html = await process(response.result)

    return { response, html }
}

export async function parseHeaders(string, maxLevel = 2) {
    // var str = await string.then((file) => String(file));
    // console.log(string)
    const str = String(string).split('\n')
    const regex = /<h([0-9]).*>(.*)<\/h[0-9]>/g
    let matches = []
    str.forEach((string) => {
        let match = regex.exec(string)
        while (match) {
            if (Number(match[1]) <= maxLevel) {
                matches.push({
                    level: match[1],
                    text: match[2]
                })
                match = regex.exec(string)
            }
        }
    })
    return matches || []
}
export function generateLinkMarkup(contentElement) {
    const headings = [...contentElement.querySelectorAll('h1, h2')]
    const parsedHeadings = headings.map(heading => {
        return {
            title: heading.innerText,
            depth: heading.nodeName.replace(/\D/g, ''),
            id: heading.getAttribute('id')
        }
    })
    console.log(parsedHeadings)
}