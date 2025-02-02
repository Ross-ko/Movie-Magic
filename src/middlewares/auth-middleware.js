import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export const authMiddleware = (req, res, next) => {
    // get token
    const token = req.cookies['auth'];

    if(!token) {
        return next();
    }
        // validate token
    try {
        const decodedToken = jwt.verify(token, SECRET);

        //attach decoded token to request
        req.user = decodedToken;

        next();
    } catch (err) {
        // invalid token
        res.clearCookie('auth');
        res.redirect('auth/login');
    }
};