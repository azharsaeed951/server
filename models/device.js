"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      key: DataTypes.STRING,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Device",
      tableName: "device",
      timestamps: false,
    }
  );
  return Device;
};
