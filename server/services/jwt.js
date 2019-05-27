import jwt from 'jsonwebtoken'

export async function generateToken(data) {
    return await jwt.sign({
      ...data
    }, process.env.saltKey, {
      expiresIn: process.env.tokenExpiresIn
    });
  }
  
  export async function decodeToken(token) {
    return await jwt.decode(token);
  }