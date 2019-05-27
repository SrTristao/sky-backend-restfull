import {
    User
} from '../../models/User';

export const getById = async id => await User.findById({
    _id: id
})