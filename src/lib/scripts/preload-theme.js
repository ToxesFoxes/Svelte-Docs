export default function () {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
    } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    }
}