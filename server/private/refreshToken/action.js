import { newToken } from './service';

const refreshToken = async (req, res, next) => {
  try {
    res.json(await newToken(req));
  } catch (err) {
    next(err);
  }
};

export default refreshToken;
