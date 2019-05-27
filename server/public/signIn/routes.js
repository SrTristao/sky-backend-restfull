import express from 'express';

import { signIn } from './action';

const router = express.Router();

router.post('/', signIn);

export default router;
