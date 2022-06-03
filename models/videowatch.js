"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VideoWatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VideoWatch.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      device_id: DataTypes.INTEGER,
      video_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "VideoWatch",
      tableName: "video_watch",
      timestamps: false,
    }
  );
  return VideoWatch;
};
