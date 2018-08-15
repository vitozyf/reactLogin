import sequelize from './db';

let sequelizePro = sequelize();

//导入模型
let Sessions = sequelizePro.import('./models/Sessions.js');
let Topics = sequelizePro.import('./models/Topics.js');
let Comments = sequelizePro.import('./models/Comments.js');
let Users = sequelizePro.import('./models/Users.js');

// 同步模型到数据库中
sequelizePro.sync()

// 建立模型之间的关系
Topics.belongsTo(Users);
Comments.belongsTo(Users);
Topics.hasMany(Comments);

export {
  sequelizePro,
  Sessions,
  Topics,
  Users,
  Comments
}