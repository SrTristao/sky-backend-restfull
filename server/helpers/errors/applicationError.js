class ApplicationError extends Error {
  constructor(params) {
    super();

    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    this.message = params.message || 'Houve um erro inesperado. Por favor tente novamente.';
    this.status = params.status || 500;
  }
}

export default async (params) => {
  throw new ApplicationError(params);
};
