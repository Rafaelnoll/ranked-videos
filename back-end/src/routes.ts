import express, { RequestHandler } from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

// POST
router.post('/register', UserController.store as RequestHandler);

export default router;
