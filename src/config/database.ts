import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const isSSL = process.env.DB_SSL === "true";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",

    dialectOptions: isSSL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      : {},

    logging: false
  }
);

export default sequelize;