import bcrypt from 'bcrypt';

export async function comparePasswordHash(password: string, hashedPassword: string){
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error){
    console.error(error);
    return false;
  }
}
