import {Router} from 'express'
import UserRoutes from './userRoutes.js';
import PostRoutes from './postRoute.js';
import CommentRoutes from './commentRoutes.js';
import express, {json} from 'express';
import authRoutes from './authRoutes.js';
import likeRoutes from './likeRoutes.js';
import likeCommentRoutes from './likeCommentRoutes.js';


const router = Router()

const app = express();


router.use('/api/user', UserRoutes)

//* For Post routes
router.use('/api/post', PostRoutes)


//* For Comment routes
router.use('/api/comment', CommentRoutes)

router.use('/api/auth', authRoutes)

router.use('/api/like', likeRoutes)

router.use('/api/likeComment', likeCommentRoutes)





export default router