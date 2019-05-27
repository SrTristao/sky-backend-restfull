import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';

export const verifyToken = async (
  req, res, next
) => {
  try {
    if (req.method !== "OPTIONS") {
      const token =
        req.get("Authorization")

      if (!token) throw new Error("Usuário não autorizado.");

      req.user = await verify(token.split(" ")[1]);
    }
    next();
  } catch (err) {
    return res.status(HttpStatus.UNAUTHORIZED).send({
      message: err.message,
      status: HttpStatus.UNAUTHORIZED
    });
  }
}

export async function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.saltKey, (err, decoded) => {
      if (err || !decoded) {
        return reject(resolveVerifyError(err));
      }
      resolve(decoded);
    });
  });
}

function resolveVerifyError(err) {
  if (!err) {
    return new Error("Token não corresponde as credenciais.");
  }

  switch (err.name) {
    case "TokenExpiredError":
      return new Error("Sessão inválida.");
    default:
      return new Error("Token inválido.");
  }
}