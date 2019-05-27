import error from './error';
import { logger } from '../../helpers/logger/logger';
import {
  generateToken, decodeToken
} from '../../services/jwt';
import { mapper } from './mapper';
import { updateToken } from '../../repositories/token';

export const newToken = async (req) => {
  try {
    const user = mapper(req.user);

    let tokenUpdated = await generateToken(user);

    await updateToken(req.user.id, tokenUpdated);

    logger({
      type: 'success',
      endpoint: '/refreshToken',
      method: 'newToken',
      success: true,
      err: '',
      bodyRequest: '',
      bodyResponse: {
        token: tokenUpdated
      },
      locale: 'service.js',
    });

    return {
      token: tokenUpdated
    };

  } catch (err) {
    logger({
      type: 'error',
      endpoint: '/refreshToken',
      method: 'newToken',
      success: false,
      err,
      bodyRequest: '',
      bodyResponse: '',
      locale: 'service.js',
    });

    await error(err.message);
  }
};