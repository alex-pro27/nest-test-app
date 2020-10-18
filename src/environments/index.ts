import * as dotenv from 'dotenv';
dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const DATABASE_NAME: string = process.env.DATABASE_NAME || 'nest-test-app';
const DATABASE_PORT: number = +process.env.DATABASE_PORT || 5432;
const DATABASE_USER: string = process.env.DATABASE_USER || 'postgres';
const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || 'postgres';
const DATABASE_HOST: string = process.env.DATABASE_HOST || 'localhost';
const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || '37+?p39,B)uCKwz:Lb8=Qq#`=V*N#f4n';
const SALT: string = process.env.SALT;
const SERVER_PORT: string = process.env.SERVER_PORT || 'S6;_VY#8ED@>-5@!4{G*Xy+"YhhT`[EC';

export {
  NODE_ENV,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  ACCESS_TOKEN_SECRET,
  SALT,
  SERVER_PORT,
};
