import HttpStatus from 'http-status-codes';
import ApplicationError from '../../helpers/errors/applicationError';

const mountObject = (messageError, statusError) => ({
  status: statusError,
  message: messageError
});

export default async (type) => {
  switch (type) {
    case 'not-found':
      await ApplicationError(mountObject('Usuário não encontrado.', HttpStatus.NOT_FOUND));
      break;
    case 'invalid-password':
      await ApplicationError(mountObject('Usuário e/ou senha inválidos.', HttpStatus.UNAUTHORIZED));
      break;
    default:
      await ApplicationError(mountObject('Houve um erro inesperado.', HttpStatus.BAD_REQUEST));
      break;
  }
};