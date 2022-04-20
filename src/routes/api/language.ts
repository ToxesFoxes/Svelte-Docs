
export async function post(event): Promise<any> {
    const locals = event.locals
    const data = await event.request.json()
    console.log('formdata js log of request : ', data)
    locals.session.data = {
        lang: data.lang
    }
    console.log(locals.session.refresh())
    return {
        body: {
            ok: true
        }
    }
}