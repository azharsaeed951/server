"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductImage.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      product_id: DataTypes.INTEGER,
      image: DataTypes.STRING,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProductImage",
      tableName: "product_image",
      timestamps: false,
    }
  );
  return ProductImage;
};
