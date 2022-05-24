"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      fb_id: DataTypes.STRING,
      description: DataTypes.TEXT,
      video: DataTypes.STRING,
      thum: DataTypes.STRING,
      gif: DataTypes.STRING,
      view: DataTypes.INTEGER,
      section: DataTypes.STRING,
      sound_id: DataTypes.INTEGER,
      privacy_type: DataTypes.STRING,
      allow_comments: DataTypes.STRING,
      allow_duet: DataTypes.INTEGER,
      block: DataTypes.INTEGER,
      duet_video_id: DataTypes.INTEGER,
      old_video_id: DataTypes.INTEGER,
      duration: DataTypes.FLOAT,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Video",
      tableName: "video",
      timestamps: false,
    }
  );
  return Video;
};
