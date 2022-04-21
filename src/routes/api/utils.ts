export async function loadFile(path: string): Promise<string> {
    const response = await fetch(path)
    return await response.text()
}
export async function loadJsonFile(path: string): Promise<any> {
    return JSON.parse(await loadFile(path))
}