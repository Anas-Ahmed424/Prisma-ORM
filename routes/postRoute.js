import { Router } from 'express';
import { createPost, updatePost, fetchPosts, showPost, deletePost, searchPost} from '../Controller/PostController.js';

const router = Router()

router.post('/', createPost);
router.post('/:id', updatePost);
router.get('/', fetchPosts);
router.get('/search', searchPost);
router.get('/:id', showPost);
router.delete('/:id', deletePost);



export default router;

