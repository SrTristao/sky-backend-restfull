import HttpStatus from 'http-status-codes';
import ApplicationError from '../../helpers/errors/applicationError';

const mountObject = (messageError, statusError) => ({
  status: statusError,
  message: messageError
});

export default async (type) => {
  switch (type) {
    case 'user-not-found':
      await ApplicationError(mountObject('Usuário não foi encontrado.', HttpStatus.UNAUTHORIZED));
      break;
    default:
      await ApplicationError(mountObject('Houve um erro inesperado.', HttpStatus.UNPROCESSABLE_ENTITY));
      break;
  }
};