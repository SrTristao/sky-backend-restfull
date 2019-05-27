import express from 'express';

import { signUp } from './action';

const router = express.Router();

router.post('/', signUp);

export default router;
