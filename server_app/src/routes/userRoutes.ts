import express, { Request, Response } from 'express';
import userController from '../controllers/userController';
import middlewares from '../middlewares/validateMiddleware'
const router = express.Router();

// Маршруты для пользователей
router.post('/users', middlewares.userValidationMiddleware, userController.searchUser);

export default router;