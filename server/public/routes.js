import express from 'express';
import healthcheckRoutes from './healthcheck/routes';
import signUpRoutes from './signUp/routes';
import signInRoutes from './signIn/routes';

const router = express.Router();

router.use('/healthcheck', healthcheckRoutes);
router.use('/signUp', signUpRoutes);
router.use('/signIn', signInRoutes);

export default router;
