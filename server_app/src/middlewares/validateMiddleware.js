"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const userValidationMiddleware = (0, express_validator_1.checkSchema)({
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
exports.default = {
    userValidationMiddleware
};
