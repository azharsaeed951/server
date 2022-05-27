"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HashtagFavourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HashtagFavourite.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      hashtag_id: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "HashtagFavourite",
      tableName: "hashtag_favourite",
      timestamps: false,
    }
  );
  return HashtagFavourite;
};
