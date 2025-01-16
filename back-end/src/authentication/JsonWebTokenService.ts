import jwt from 'jsonwebtoken';
import { JWTPayload } from '../../types/JWTPayload';

class JsonWebTokenService {
  private secret: string;

  constructor(){
    this.secret = process.env.JWT_SECRET as string;
  }

  generateToken(userId: string){
    return jwt.sign({ userId }, this.secret)
  }

  verifyToken(token: string) {
    return jwt.verify(token, this.secret) as unknown as JWTPayload;
  }
}

export default new JsonWebTokenService();
