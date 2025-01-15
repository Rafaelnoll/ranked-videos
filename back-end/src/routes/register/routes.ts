import express from 'express';
import RegisterHandler from './RegisterHandler'

const router = express.Router()

router.post('/register', RegisterHandler.registerUser)

export default router;
