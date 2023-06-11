import jwt from "jsonwebtoken";

const extractToken = (req) => {
    const authHeader = req.headers.authorization;

    return authHeader;
}

const authenticate = (req,res,next) =>{
    const token = extractToken(req);
    console.log(token);
    try{
        jwt.verify(token,'verySecretKey');
        next();
    }catch (e){
        console.log(e);
        res.status(401).send('Not auuthorised!');
    }
}

export{
    authenticate
}