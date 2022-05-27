"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Follower.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sender_id: DataTypes.INTEGER,
      receiver_id: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Follower",
      tableName: "follower",
      timestamps: false,
    }
  );
  return Follower;
};
