"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProfileVisit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfileVisit.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sender_id: DataTypes.INTEGER,
      receiver_id: DataTypes.INTEGER,
      sender_city: DataTypes.STRING,
      sender_country: DataTypes.STRING,
      gender: DataTypes.STRING,
      dob: DataTypes.DATE,
      visit_total_time: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProfileVisit",
      tableName: "profile_visit",
      timestamps: false,
    }
  );
  return ProfileVisit;
};
