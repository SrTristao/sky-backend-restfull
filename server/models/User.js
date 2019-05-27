import {
    Schema,
    model
} from 'mongoose';
import * as bcrypt from '../services/bcrypt';
import uuid from "uuid/v4"
import { generateToken } from '../services/jwt';
import { tokenMapper } from '../mappers/token';

const phoneSchema = new Schema({
    numero: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 9
    },
    dd: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    _id: {
        type: String,
        required: true,
        default: () => uuid()
    }
});

export const Phone = model('Phone', phoneSchema)

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = email=> {
    return regexEmail.test(email)
};

const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [regexEmail],
        validate: [validateEmail],
    },
    senha: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: Date,
    updatedAt: Date,
    telefones: [phoneSchema],
    _id: {
        type: String,
        required: true,
        default: () => uuid()
    },
    token: String
});

userSchema.pre("save", async function (next) {
    console.log(this);
    if (!this.createdAt) {
        this.createdAt = new Date();
        this.senha = await bcrypt.hash(this.senha);
        this.updatedAt = new Date();
        this.token = await generateToken(tokenMapper(this));
    }

    next();
});

export const User = model('User', userSchema);