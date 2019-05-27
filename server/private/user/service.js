import error from './error';
import { logger } from '../../helpers/logger/logger';
import * as repository from './repository';
import { mapper } from './mapper';

export const getById = async (req) => {
  try {
    const userFinded = await repository.getById(req.params.id);

    if (!userFinded) throw new Error('user-not-found');

    const token =
            req.get("Authorization").split(" ")[1];

    if (token !== userFinded.token) throw new Error('token-not-equal');

    const user = mapper(userFinded);
    
    logger({
      type: 'success',
      endpoint: '/user',
      method: 'getById',
      success: true,
      err: '',
      bodyRequest: '',
      bodyResponse: {
        ...user
      },
      locale: 'service.js',
    });

    return {
      ...user
    };

  } catch (err) {
    logger({
      type: 'error',
      endpoint: '/user',
      method: 'getById',
      success: false,
      err,
      bodyRequest: '',
      bodyResponse: '',
      locale: 'service.js',
    });

    await error(err.message);
  }
};