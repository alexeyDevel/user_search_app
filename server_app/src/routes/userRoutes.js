"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const validateMiddleware_1 = __importDefault(require("../middlewares/validateMiddleware"));
const router = express_1.default.Router();
// Маршруты для пользователей
router.post('/users', validateMiddleware_1.default.userValidationMiddleware, userController_1.default.searchUser);
exports.default = router;
