import { writable } from "svelte-local-storage-store"

export const theme = writable("theme", 0)
export const language = writable("language", 'en')
export const languages = writable("languages", [])
export const maxDepth = writable("maxDepth", 3)
