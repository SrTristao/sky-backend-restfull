import HttpStatus from 'http-status-codes';
const statusServer = async (req, res, next) => {
  try {
    res.send({
      "status": "UP",
      "status": HttpStatus.OK
      });
  } catch (err) {
    next(err);
  }
};

export default statusServer;
