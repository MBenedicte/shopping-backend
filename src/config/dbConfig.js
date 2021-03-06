import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    use_env_variable: 'DATABASE_URL_DEV',
    username: process.env.DB_USER_DEV,
    password: null,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    username: process.env.DB_USER_TEST,
    password: null,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',

    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};

module.exports = config;
