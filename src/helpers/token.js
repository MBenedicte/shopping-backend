import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const createToken = async (phone, password) => {
  const secretKey = process.env.TOKEN_SECRET_KEY;
  const token = await jwt.sign({ phone, password }, secretKey);
  return token;
};

export const decodeToken = async token => {
  try {
    const secretKey = process.env.TOKEN_SECRET_KEY;
    const decoded = await jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return { errors: err };
  }
};
