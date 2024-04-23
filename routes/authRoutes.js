import { Router } from 'express';
import { loginUser } from '../Controller/authController.js';

const router = Router()

router.post('/login/method', loginUser);

export default router;
