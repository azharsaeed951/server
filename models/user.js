"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      bio: DataTypes.TEXT,
      website: DataTypes.STRING,
      dob: DataTypes.DATE,
      social_id: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      role: DataTypes.STRING,
      username: DataTypes.STRING,
      social: DataTypes.STRING,
      device_token: DataTypes.STRING,
      token: DataTypes.STRING,
      active: DataTypes.INTEGER,
      lat: DataTypes.STRING,
      long: DataTypes.STRING,
      online: DataTypes.INTEGER,
      verified: DataTypes.INTEGER,
      auth_token: DataTypes.STRING,
      version: DataTypes.STRING,
      device: DataTypes.STRING,
      ip: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
      state_id: DataTypes.INTEGER,
      country_id: DataTypes.INTEGER,
      fb_id: DataTypes.STRING,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: false,
    }
  );
  return User;
};
