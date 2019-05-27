import { signInService } from './service';

export const signIn = async (req, res, next) => {
  try {
    res.json(await signInService(req.body));
  } catch (err) {
    next(err);
  }
};
