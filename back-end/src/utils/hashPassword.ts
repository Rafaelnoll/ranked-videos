import bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    try {
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds);
    } catch(error){
      console.error(error);
      return '';
    }
}
