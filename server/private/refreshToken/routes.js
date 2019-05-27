import express from 'express';

import refreshToken from './action';

const router = express.Router();

router.post('/', refreshToken);

export default router;
