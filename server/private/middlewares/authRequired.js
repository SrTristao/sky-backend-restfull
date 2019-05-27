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

            const user = await getById(req.user.id);

            if (token !== user.token) return res.status(HttpStatus.UNAUTHORIZED).send({
                status: HttpStatus.UNAUTHORIZED,
                message: 'Não autorizado.'
            });

            const rolesArray = lodash.flattenDeep([roles, ['admin']]);
            const isAuthorized = rolesArray.some(role => user.role === role);

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