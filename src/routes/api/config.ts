
export async function post(event): Promise<any> {
    const data = await event.request.json()
    console.log('formdata js log of request : ', data)
    const file = await fetch(data.file)
    // console.log(locals.session.refresh())
    return {
        body: {
            data: file,
            status: 200,
            ok: true
        }
    }
}