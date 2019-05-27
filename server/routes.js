import express from 'express';

import privateRoutes from './private/routes';
import publicRoutes from './public/routes';

const router = express.Router();

router.use('/public', publicRoutes);
router.use('/private', privateRoutes);

export default router;
