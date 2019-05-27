import lodash from 'lodash';
import {
    decodeToken
} from '../../services/jwt';
import HttpStatus from 'http-status-codes';
import {
    getById
} from '../repositories/user';

export const authRequired = (roles = []) => {
    return async (req, res, next) => {
        try {
            if (req.method === 'OPTIONS') {
                return next();
            }

            if (!roles) {
                return next();
            }

            const rolesArray = lodash.flattenDeep([roles, ['admin']]);
            const isAuthorized = rolesArray.some(role => req.user.role === role);

            if (!isAuthorized) {
                return res.status(HttpStatus.FORBIDDEN).send({
                    status: HttpStatus.FORBIDDEN,
                    message: 'Usuário não tem os direitos de acesso para acessar este URL'
                });
            }
            next();
        } catch (err) {
            res.status(HttpStatus.BAD_REQUEST).send({
                status: HttpStatus.BAD_REQUEST,
                message: 'Houve um erro inesperado.'
            })
        }
    }
}