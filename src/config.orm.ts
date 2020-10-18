
import { NODE_ENV, DATABASE_NAME, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST } from './environments';

const DEFAULT_DB = {
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
}

const orm = {
  development: DEFAULT_DB,
  testing: {
    ...DEFAULT_DB,
    database: DATABASE_NAME + '_test',
  },
  staging: DEFAULT_DB,
  production: DEFAULT_DB
}

export default orm[NODE_ENV!]
