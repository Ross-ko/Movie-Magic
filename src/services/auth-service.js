import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = '$2b$10$1JVvFprpN3S9lYOjw142xOdsLjr5Rvt3hzjahRo9uoXKsBm9eby3y'

export default {
    register(userData) {
        return User.create(userData); 
    },
    async login(email, password) {
        
        const user = await User.findOne({email});

        // check user exists
        if(!user) {
            throw new Error('Invalid email or password!')
        };

        // check password is correct
        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            throw new Error('Invalid email or password!')
        };

        // generate token
        const payload = {
            id: user.id,
            email: user.email,
        }
        const token = jwt.sign(payload, SECRET, {expiresIn: '2h'});

        // return token
        return token;
    }
};