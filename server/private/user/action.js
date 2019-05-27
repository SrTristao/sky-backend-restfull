import { getById } from './service';

export const getUserById = async (req, res, next) => {
  try {
    res.json(await getById(req));
  } catch (err) {
    next(err);
  }
};
