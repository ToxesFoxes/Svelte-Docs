import { writable } from 'svelte-local-storage-store'

export const headers = writable('markdown-headers', {})
export const sidebarPages = writable('sidebar', [])

