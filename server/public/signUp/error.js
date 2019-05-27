import HttpStatus from 'http-status-codes';
import ApplicationError from '../../helpers/errors/applicationError';

const mountObject = (messageError, statusError) => ({
  status: statusError,
  message: messageError
});

export default async (error) => {
  const type = getErrors(error);
  switch (type) {
    case 'user-already-exists':
      await ApplicationError(mountObject('E-mail já existente.', HttpStatus.CONFLICT));
      break;
    case 'invalid-phone':
      await ApplicationError(mountObject('Telefone inválido.', HttpStatus.UNPROCESSABLE_ENTITY));
      break;
    case 'email-required':
      await ApplicationError(mountObject('O campo email é obrigatório.', HttpStatus.UNPROCESSABLE_ENTITY));
      break;
    case 'name-required':
      await ApplicationError(mountObject('O campo nome é obrigatório.', HttpStatus.UNPROCESSABLE_ENTITY));
      break;
    case 'password-required':
      await ApplicationError(mountObject('O campo senha é obrigatório.', HttpStatus.UNPROCESSABLE_ENTITY));
      break;
    default:
      await ApplicationError(mountObject('Houve um erro inesperado.', HttpStatus.BAD_REQUEST));
      break;
  }
};

const getErrors = error => {
  if (error.includes('telefones')) return 'invalid-phone';
  if (error.includes('duplicate key error')) return 'user-already-exists'
  if (error.includes('`email` is required.')) return 'email-required'
  if (error.includes('`nome` is required.')) return 'name-required'
  if (error.includes('`senha` is required.')) return 'password-required'
}