import { Router } from 'express';
import { createLikeComment, updateLikeComment, fetchLikeComments, showLikeComment, deleteLikeComment} from '../Controller/LikeCommentController.js';

const router = Router()

router.post('/addOne', createLikeComment);
router.post('/:id', updateLikeComment);
router.get('/', fetchLikeComments);
router.post('/show/one', showLikeComment);
router.delete('/', deleteLikeComment);



export default router;