import Sequelize from 'sequelize';
import { defineModel } from '../db';

const Comments = defineModel('dbo.Comment', {
  CommentContent: { // 回复内容
    type: Sequelize.CHAR
  },
  UserID: { // 回复id
    type: Sequelize.CHAR
  },
  TopicId: {
    type: Sequelize.INTEGER
  },
  // CommentIndex: {
  //   type: Sequelize.INTEGER
  // },
  LikedCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

export default Comments