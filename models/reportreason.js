"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportReason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReportReason.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.TEXT,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ReportReason",
      tableName: "report_reason",
      timestamps: false,
    }
  );
  return ReportReason;
};
