"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AudienceLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AudienceLocation.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      audience_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
      state_id: DataTypes.INTEGER,
      country_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AudienceLocation",
      tableName: "audience_location",
      timestamps: false,
    }
  );
  return AudienceLocation;
};
