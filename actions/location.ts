async function action(
    _props: unknown,
    req: Request
) {
    const location = await req.headers.get("cf-ipcountry") ?? "brazil";

    return await location;
}

export default action;