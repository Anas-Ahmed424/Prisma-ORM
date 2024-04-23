import { Router } from 'express';
import { createLike, updateLike, fetchLikes, showLike, deleteLike} from '../Controller/LikeController.js';

const router = Router()

router.post('/create', createLike);
router.post('/:id', updateLike);
router.get('/display', fetchLikes);
router.post('/fetch/by_id', showLike);
router.delete('/id', deleteLike);


export default router;