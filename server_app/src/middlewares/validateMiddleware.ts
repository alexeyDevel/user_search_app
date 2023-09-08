import {checkSchema} from "express-validator";

const userValidationMiddleware = checkSchema({
    email: {
        errorMessage: 'Invalid email',
        isEmail: true,
    },
    number: {
        optional: true,
        isNumeric: true,
        isLength: {
            options: { min: 6 },
        },
    },
});

export default {
    userValidationMiddleware
}