import { loadJsonFile } from './utils'
export async function post(event): Promise<any> {
    const data = await event.request.json()
    const lang = data?.lang ?? (event.locals.session.data?.lang ?? 'en')
    if (!lang)
        return { status: 404 }
    const config = await loadJsonFile(event.url.origin + `/static-docs/config.json`)
    const pagesPath = config.languages.find(language => language.code === lang)
    let pages = {}
    if (pagesPath) {
        pages = await loadJsonFile(event.url.origin + `/static-docs/${pagesPath.path}`)
        // console.log(pages)
    }
    return {
        body: {
            ...pages
        }
    }
}