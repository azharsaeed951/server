"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PrivacySetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PrivacySetting.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      videos_download: DataTypes.INTEGER,
      direct_message: DataTypes.STRING,
      duet: DataTypes.STRING,
      liked_videos: DataTypes.STRING,
      video_comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PrivacySetting",
      tableName: "privacy_setting",
      timestamps: false,
    }
  );
  return PrivacySetting;
};
