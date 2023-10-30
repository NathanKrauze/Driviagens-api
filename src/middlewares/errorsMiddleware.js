import httpStatus from "http-status";

export async function handleErrors(error, req, res, next) {
    console.log(error)

    if(error.type === 'unprocessable-entity'){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: error.message})
    }

    if(error.type === 'conflict'){
        return res.status(httpStatus.CONFLICT).send({message: error.message})
    }

    if(error.type === 'not-found'){
        return res.status(httpStatus.NOT_FOUND).send({message: error.message})
    }

    return res.sendStatus(500);
}