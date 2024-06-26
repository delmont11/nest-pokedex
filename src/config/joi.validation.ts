import * as Joi from 'joi';
export const JoinValidationSchema = Joi.object({
    MONGO_DB: Joi.string().required(),
    PORT: Joi.number().default(3000),
    ENV: Joi.string().default('dev')
})