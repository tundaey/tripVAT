import * as jwt from 'jsonwebtoken';
import { config } from '../config/config'

export const requireAuth = ({ req }) => {
  if (!req.headers || !req.headers.authorization){
    throw new Error('No authorization headers.'); 
      // return res.status(401).send({ message: 'No authorization headers.' });
  }
  

  const token_bearer = req.headers.authorization.split(' ');
  if(token_bearer.length != 2){
    throw new Error('Malformed token'); 
    // return res.status(401).send({ message: 'Malformed token.' });
  }
  
  const token = token_bearer[1];

  return jwt.verify(token, config.dev.jwt_secret, (err, decoded) => {
    if (err) {
      throw new Error('Failed to authenticate.'); 
      //return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
    }
    return { user: {
      email: decoded.email
    }};
  });
}