import { loadStaticDocsFile, readDocsConfig } from '$lib/scripts/file_utils'

export async function post(event): Promise<any> {
    const data = await event.request.json()
    console.log('formdata js log of request : ', data)
    const config = await readDocsConfig()
    const pagesPath = config.languages.find(lang => lang.code === data.lang).path
    const file = await loadStaticDocsFile(pagesPath)
    return {
        body: {
            file: JSON.parse(file.result)
        }
    }
}