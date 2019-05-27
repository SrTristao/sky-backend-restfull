import { signUpService } from './service';

export const signUp = async (req, res, next) => {
  try {
    res.json(await signUpService(req.body));
  } catch (err) {
    next(err);
  }
};
