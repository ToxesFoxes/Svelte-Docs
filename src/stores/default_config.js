import { writable } from "svelte-local-storage-store"
import { loadStaticDocsFile } from '$lib/scripts/file_utils'
var config = {}

export async function load() {
    const file = await loadStaticDocsFile('config.json')
    if (file.status === 200)
        config = JSON.parse(file.result)
}

export const Dtheme = writable("default_theme", config.default_theme || 0)
export const Dlanguage = writable("default_language", config.default_language || 'en')
export const Dlanguages = writable("languages", config.languages || [])
export const DmaxDepth = writable("maxDepth", config.maxDepth || 3)

export async function update() {
    await load()
    Dtheme.set(config.default_theme || 0)
    Dlanguage.set(config.default_language || 'en')
    Dlanguages.set(config.languages || [])
    DmaxDepth.set(config.maxDepth || 3)
}