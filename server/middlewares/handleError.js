const determineError = async (err, req, res) => {
  res
    .status(err.status)
    .send({
      message: err.message,
      status: err.status
    });
};

export default async (err, req, res, next) => {
  await determineError(err, req, res, next);
};
