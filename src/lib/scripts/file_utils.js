export async function loadStaticDocsFile(file_path) {
    const env = import.meta.env
    const url = `${env['VITE_APP_URL']}/${env['VITE_STATIC_DOCS_PATH']}/${file_path}`
    let response
    try {
        response = await fetch(url)
    } catch (e) {
        console.log(e)
    }

    return {
        status: response.status,
        result: response.ok && (await response.text())
    }
    // return await fetch(url).then(
    //     (value) => {
    //         console.log(value)
    //         if (value.ok == true && value.status == 200)
    //             return value.text()
    //         else {
    //             $: if (browser) {
    //                 goto()
    //             }
    //         }

    //             // return undefined //`# ${value.status} - ${value.statusText}\n> ${url}`

    //     },
    //     // () => "asd",
    //     (reason) => `# File not found\n>${url} doesn't exists!\n## Reason\n> ${reason}`
    // )
}
export async function loadFromRemote(url) {
    const response = await fetch(url)
    return {
        status: response.status,
        result: response.ok && (await response.text())
    }
    // return await fetch(url).then(
    //     (value) => value.text(),
    //     (reason) => `# Page not found\n> [This page](${url}) can't be loaded\n## Reason\n> ${reason}`,
    // )
}
export async function readDocsConfig() {
    const file = await loadStaticDocsFile('config.json')
    if (file.status === 200)
        return JSON.parse(file.result)

    return []
}