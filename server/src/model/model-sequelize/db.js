import Sequelize from 'sequelize';
import Config from 'config';
const ISPRODUCTION =  process.env.NODE_ENV === 'production'
const mysqlConfig = ISPRODUCTION ? Config.Production.mysqlConfig : Config.Dev.mysqlConfig

let sequelize = () => {
  return new Sequelize(
    mysqlConfig.database, 
    mysqlConfig.user, 
    mysqlConfig.password, 
    {
      host: mysqlConfig.host,
      dialect: 'mysql',
      port: mysqlConfig.port,
      logging: false,
      pool: {
        max: 10,
        min: 3,
        acquire: 30000,
        idle: 10000
      },
      operatorsAliases: false
    }
  )
}

export default sequelize