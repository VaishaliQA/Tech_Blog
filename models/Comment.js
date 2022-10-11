const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Comment model
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // set primary key
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      validate: {
        len: [3],
      },
    },
    user_id: {
      // set FK refrences of user table
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      // set FK refrences of post table
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);
module.exports = Comment;
