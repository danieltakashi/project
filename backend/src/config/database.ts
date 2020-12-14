import { Sequelize } from 'sequelize';
import Logger from './logger';
import config from './config';
import dotenv from 'dotenv';
dotenv.config();

export { DataTypes } from 'sequelize';

const logger = Logger.logger;


const instantiateDb = () => {
  const configDb = config[process.env.NODE_ENV];

  if ('production' === process.env.NODE_ENV) {
    return new Sequelize(configDb.database, configDb.username , configDb.password , {
      host: configDb.host,
      port: parseInt(configDb.port),
      dialect: configDb.dialect,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }
  else 
  {
    return new Sequelize({
      dialect: configDb.dialect,
      storage: configDb.storage
    });  
  }
}
const sequelize = instantiateDb();
sequelize
  .authenticate()
  .then(() => {
    logger.info('Connected to the database.');
  })
  .catch((error) => {
    logger.error('Could not connect to the database.', error);
  });

sequelize.sync();

export default sequelize;
