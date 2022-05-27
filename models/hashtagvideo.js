"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HashtagVideo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HashtagVideo.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      hashtag_id: DataTypes.INTEGER,
      video_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HashtagVideo",
      tableName: "hashtag_video",
      timestamps: false,
    }
  );
  return HashtagVideo;
};
