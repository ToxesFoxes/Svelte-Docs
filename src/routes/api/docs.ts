
import { process } from '$lib/scripts/load_markdown'
import { findSlug } from '$lib/scripts/pages_parser'
import { loadJsonFile, loadFile } from './utils'
export async function get(event): Promise<any> {
    const lang = event.url.searchParams.get('lang') ?? (event.locals.session.data?.lang ?? 'en')
    const slug = event.url.searchParams.get('slug') ?? 'index'
    const asData = event.url.searchParams.get('asData') ?? false
    const convert = event.url.searchParams.get('convert') ?? true
    const config = await loadJsonFile(event.url.origin + `/static-docs/config.json`)
    const pagesPath = config.languages.find(language => language.code === lang)
    // console.log(lang, slug, asData, convert)

    let pages, page_data

    if (pagesPath) {

        pages = await loadJsonFile(event.url.origin + `/static-docs/${pagesPath.path}`)
        console.log('pages:', pages)
        if (pages) {
            page_data = findSlug(pages.pages, slug)
            console.log('page_data', page_data)
            if (page_data) {
                // console.log('find:',pages.pages.find(page => page.slug == slug))
                if (asData)
                    return { body: page_data }
                console.log('data:', page_data)
                const isRemote = page_data?.remote ?? false
                let mdContent
                if (!isRemote)
                    mdContent = await loadFile(event.url.origin + `/static-docs/${lang}/${page_data.file}`)
                else
                    mdContent = await loadFile(page_data.file)
                console.log(await process(mdContent))
                // console.log(mdContent)
                return {
                    body: convert ? await process(mdContent) : mdContent,
                }
            }
        }
    }
    return {
        status: 500
    }
}