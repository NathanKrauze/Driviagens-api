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

export const flightSchema = Joi.object({
    origin: Joi.number().required().messages({
        'number.base': 'origin must be a number',
        'any.required': 'origin is required'
    }),
    destination: Joi.number().required().invalid(Joi.ref('origin')).messages({
        'number.base': 'destination must be a number',
        'any.invalid': 'destination must be different from origin',
        'any.required': 'destination is required'
    }),
    date: Joi.date().format('DD-MM-YYYY').greater('now').required().messages({
        'date.base': 'date must be in date format',
        'date.format': 'date must be at this format: DD-MM-YYYY',
        'date.greater': 'date must be greater than today',
        'any.required': 'date is required'
    })
})

export const travelSchema = Joi.object({
    passengerId: Joi.number().required().messages({
        'number.base': 'passengerId must be a number',
        'any.required': 'passengerId is required'
    }),
    flightId: Joi.number().required().messages({
        'number.base': 'flightId must be a number',
        'any.required': 'flightId is required'
    })
})