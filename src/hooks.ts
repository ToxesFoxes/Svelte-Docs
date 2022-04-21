import type { GetSession } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import { handleSession } from "svelte-kit-cookie-session"

export const getSession: GetSession = function ({ locals }) {
    return locals.session.data
}

const sessionHandler = handleSession({
    secret: "SOME_COMPLEX_SECRET_AT_LEAST_32_CHARS",
})

export const handle = sequence(sessionHandler, async ({ resolve, event }) => {
    // console.log(`session: `, event.locals.session)
    // /*
    if(!event.locals.session.data){
        event.locals.session.data = {
            lang: 'en'
        }
        event.locals.session.refresh()
    }
    // */
    return await resolve(event, {
        transformPage: ({ html }) => {
            const lang = event.locals.session.data?.lang ?? "en"
            return html.replace("%session.lang%", lang)
        },
    })
})