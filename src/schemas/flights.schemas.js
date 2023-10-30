import joiBase from "joi";
import joiDate from '@joi/date';

const Joi = joiBase.extend(joiDate);

export const citySchema = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
        'string.base': 'city name must be a string',
        'string.min': 'city name must have at least two characters',
        'string.max': 'city name must have a maximum of 50 characters',
        'any.required': 'city name is required'
    })
})