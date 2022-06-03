"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sound.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      audio: DataTypes.STRING,
      duration: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      thum: DataTypes.STRING,
      sound_section_id: DataTypes.INTEGER,
      uploaded_by: DataTypes.STRING,
      publish: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Sound",
      tableName: "sound",
      timestamps: false,
    }
  );
  return Sound;
};
