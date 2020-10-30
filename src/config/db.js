import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, // Evitar mensaje de estado por consola
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
  }
);

export default db;
