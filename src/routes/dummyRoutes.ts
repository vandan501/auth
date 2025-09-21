import { Router } from 'express';
import { helloWorld, secureData } from '../controllers/dummyController';

const router = Router();

router.get('/hello', helloWorld);
router.get('/secure', secureData);

export default router;
