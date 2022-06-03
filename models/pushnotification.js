"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PushNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PushNotification.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      likes: DataTypes.INTEGER,
      comments: DataTypes.INTEGER,
      new_followers: DataTypes.INTEGER,
      mentions: DataTypes.INTEGER,
      direct_messages: DataTypes.INTEGER,
      video_updates: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PushNotification",
      tableName: "push_notification",
      timestamps: false,
    }
  );
  return PushNotification;
};
