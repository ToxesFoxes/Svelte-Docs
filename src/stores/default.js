import { writable } from "svelte-local-storage-store"
export const theme = writable('theme', 'light')
export const isDark = writable('isDark', false)
