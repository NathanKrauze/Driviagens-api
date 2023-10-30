import Joi from "joi";

export const passengerSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).required().messages({
        'string.base': 'first name must be a string',
        'string.min': 'first name must have at least two characters',
        'string.max': 'first name must have a maximum of 100 characters',
        'any.required': 'first name is required'
    }),
    lastName: Joi.string().min(2).max(100).required().messages({
        'string.base': 'last name must be a string',
        'string.min': 'last name must have at least two characters',
        'string.max': 'last name must have a maximum of 100 characters',
        'any.required': 'last name is required'
    })
})
