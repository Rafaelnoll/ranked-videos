import jwt from 'jsonwebtoken';

class JsonWebTokenService {
  private secret: string;

  constructor(){
    this.secret = process.env.JWT_SECRET as string;
  }

  generateToken(userId: string){
    return jwt.sign({ userId }, this.secret)
  }

  verifyToken(token: string){
    return jwt.verify(token, this.secret);
  }
}

export default new JsonWebTokenService();
