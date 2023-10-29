export async function handleErrors(error, req, res, next) {
    console.log(error)

    return res.sendStatus(500);
}