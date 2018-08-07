import Sequelize from 'sequelize';
import Config from '../../../config';

console.log('init sequelize...');

const mysqlConfig = Config.mysqlConfig

var sequelize = new Sequelize(
  mysqlConfig.database, 
  mysqlConfig.user, 
  mysqlConfig.password, 
  {
    host: mysqlConfig.host,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 3,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

const ID_TYPE = Sequelize.INTEGER;

function defineModel(name, attributes) {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.ID = {
    type: ID_TYPE,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  };
  attrs.createdAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  attrs.updatedAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  // attrs.version = {
  //   type: Sequelize.BIGINT,
  //   allowNull: false
  // };
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
        let now = Date.now();
        if (obj.isNewRecord) {
          // if (!obj.id) {
          //   obj.id = generateId();
          // }
          obj.createdAt = now;
          obj.updatedAt = now;
          obj.version = 0;
        } else {
          obj.updatedAt = Date.now();
          obj.version++;
        }
      }
    }
  });
}

export {
  defineModel
}