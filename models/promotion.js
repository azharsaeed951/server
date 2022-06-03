"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promotion.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      video_id: DataTypes.INTEGER,
      destination: DataTypes.STRING,
      website_url: DataTypes.STRING,
      audience_id: DataTypes.INTEGER,
      start_datetime: DataTypes.DATE,
      end_datetime: DataTypes.DATE,
      price: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      destination_tap: DataTypes.INTEGER,
      followers: DataTypes.INTEGER,
      influencers: DataTypes.INTEGER,
      reach: DataTypes.INTEGER,
      clicks: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Promotion",
      tableName: "promotion",
      timestamps: false,
    }
  );
  return Promotion;
};
