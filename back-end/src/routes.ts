import express, { RequestHandler } from 'express';
import UserController from './controllers/UserController';
import VideoController from './controllers/VideoController';
import { handleLoggedUser } from './middlewares/handleLoggedUser';
import { handleUpload } from './middlewares/handleUploadFile';

const router = express.Router();

// POST
router.post('/register', UserController.store as RequestHandler);
router.post('/login', UserController.login as RequestHandler);
router.post('/videos', handleLoggedUser, handleUpload.single('video'), VideoController.store);

// GET
router.get('/videos', handleLoggedUser, VideoController.index);

export default router;
