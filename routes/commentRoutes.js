import { Router } from 'express';
import { createComment, updateComment, fetchComments, showComment, deleteComment} from '../Controller/CommentController.js';

const router = Router()

router.post('/', createComment);
router.post('/:id', updateComment);
router.get('/', fetchComments);
router.post('/:id', showComment);
router.delete('/:id', deleteComment);



export default router;