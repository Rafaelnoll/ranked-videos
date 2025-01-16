import express, { RequestHandler } from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

// POST
router.post('/register', UserController.store as RequestHandler);
router.post('/login', UserController.login as RequestHandler);

export default router;
