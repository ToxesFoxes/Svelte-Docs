export async function post(event): Promise<any> {
    const locals = event.locals
    const data = await event.request.json()
    console.log('formdata js log of request : ', data)
    if (locals.session.data)
        locals.session.data.lang = data.lang
    else
        locals.session.data = { lang: data.lang }
    console.log(locals.session.refresh())
    return {}
}
import { loadJsonFile } from './utils'
export async function get(event): Promise<any> {
    // console.log(event)
    const lang = event.url.searchParams.get('lang') ?? 'en'
    const config = await loadJsonFile(event.url.origin + `/static-docs/config.json`)
    return {
        body: config.languages

    }
}