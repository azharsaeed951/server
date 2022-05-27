"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HtmlPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HtmlPage.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      text: DataTypes.TEXT,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "HtmlPage",
      tableName: "html_page",
      timestamps: false,
    }
  );
  return HtmlPage;
};
