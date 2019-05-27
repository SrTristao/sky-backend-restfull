import * as express from 'express';

import refreshTokenRoute from './refreshToken/routes';
import userRoute from './user/routes';

import {
    verifyToken
} from './middlewares/authentication';
import {
    authRequired
} from './middlewares/authRequired';

const router = express.Router();

router.use(verifyToken);

router.use('/user', authRequired('user'), userRoute);
router.use('/refreshToken', refreshTokenRoute);

export default router;