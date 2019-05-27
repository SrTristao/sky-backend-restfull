import error from "./error";
import { mapper } from './mapper';
import { saveUser } from './repository';
import { 
  logger
} from "../../helpers/logger/logger";

export const signUpService = async (body) => {
  try {
    const user = await saveUser({...body});

    const result = mapper(user);

    logger({
      type: 'success',
      endpoint: '/signUp',
      method: 'signUpService',
      success: true,
      err: '',
      bodyRequest: '',
      bodyResponse: {
        result
      },
      locale: 'service.js',
    });

    return result;

  } catch (err) {
    logger({
      type: 'error',
      endpoint: '/singUp',
      method: 'singUpService',
      success: false,
      err,
      bodyRequest: body,
      bodyResponse: '',
      locale: 'service.js',
    });
    
    await error(err.message)
  }
};