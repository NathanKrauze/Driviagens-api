import httpStatus from "http-status";

export async function handleErrors(error, req, res, next) {
    console.log(error)

    if(error.type === 'unprocessable-entity'){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: error.message})
    }

    return res.sendStatus(500);
}