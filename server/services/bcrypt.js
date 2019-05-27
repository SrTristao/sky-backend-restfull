import * as bcrypt from 'bcrypt-nodejs';

export const hash = async (password) => {
  return await new Promise((resolve, reject) => {
    bcrypt.genSalt(11, (err, salt) => {
      if (err) return reject(err);

      bcrypt.hash(password, salt, null, async (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });

  });
}

export const compare = async (hash, password) => {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
      if (err || !isMatch) return reject(new Error(err || 'invalid-password'));
      resolve();
    });

  });
}