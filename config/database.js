import Sequelize from "sequelize";

const hostname = process.env.PGHOST || "127.0.0.1";
const username = process.env.PGUSER || "postgres";
const password = process.env.PGPASSWORD || "123";
const database = process.env.PGDATABASE || "postgres";
const dialect = "postgres";
const port = process.env.PGPORT || 5432;

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  port,
  dialect: dialect,
  operatorAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 20000,
    idle: 5000,
  },
});

export default sequelize;
