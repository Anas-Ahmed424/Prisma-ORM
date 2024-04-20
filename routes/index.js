import {Router} from 'express'
import UserRoutes from './userRoutes.js';
import PostRoutes from './postRoute.js';
import CommentRoutes from './commentRoutes.js';



const router = Router()

router.use('/api/user', UserRoutes)

//* For Post routes
router.use('/api/post', PostRoutes)


//* For Comment routes
router.use('/api/comment', CommentRoutes)


export default router