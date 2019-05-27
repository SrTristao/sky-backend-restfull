import express from 'express';

import healthcheck from './actions';

const router = express.Router();

router.get('/', healthcheck);

export default router;
