import error from "./error"
import {
  generateToken
} from '../../services/jwt';
import { tokenMapper } from '../../mappers/token';
import { mapper } from './mapper';
import { findByEmail } from './repository';
import { updateToken } from '../../repositories/token';
import { 
  logger
} from "../../helpers/logger/logger";
import * as bcrypt from '../../services/bcrypt';

export const signInService = async (body) => {
  try {
    const user = await findByEmail(body.email);

    if(!user) throw new Error("not-found")

    await bcrypt.compare(user.senha, body.senha);

    const result = mapper(user);

    const tokenData = tokenMapper(user);
    
    let token  = await generateToken(tokenData);

    await updateToken(user._id, token);

    
    logger({
      type: 'success',
      endpoint: '/signIn',
      method: 'signInService',
      success: true,
      err: '',
      bodyRequest: '',
      bodyResponse: {
        result,
        token,
      },
      locale: 'service.js',
    });

    return {
      user: result,
      token,
    };

  } catch (err) {
    logger({
      type: 'error',
      endpoint: '/singIn',
      method: 'singInService',
      success: false,
      err,
      bodyRequest: body,
      bodyResponse: '',
      locale: 'service.js',
    });

    await error(err.message);
  }
};