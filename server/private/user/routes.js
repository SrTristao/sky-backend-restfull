import express from 'express';

import { getUserById } from './action';

const router = express.Router();

router.get('/:id', getUserById);

export default router;
