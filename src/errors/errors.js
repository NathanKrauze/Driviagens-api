
export function unprocessableError(message){
    return {type: 'unprocessable-entity', message};
}

export function conflictError(message){
    return {type: 'conflict', message}
}

export function notFoundError(message){
    return {type: 'not-found', message}
}