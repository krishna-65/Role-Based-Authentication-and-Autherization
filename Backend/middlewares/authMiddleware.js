const jwt = require('jsonwebtoken');

exports.authenticateToken = async(req, res, next) => {

    //get the token 
    const token = req.headers['authorization']?.split(' ')[1];

    //if token is not available
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid Token' });
    }
};

