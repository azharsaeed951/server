const { ProductImage } = require("../models");

async function getAllImages(req, res) {
  try {
    const prodImages = await ProductImage.findAll();
    res.send(prodImages);
  } catch (err) {
    throw new Error(err);
  }
}

async function getImageByID(req, res) {
  try {
    const imageID = req.params.id;

    const prodImage = await ProductImage.findByPk(imageID);

    res.send(prodImage);
  } catch (err) {
    throw new Error(err);
  }
}

async function addImage(req, res) {
  try {
    const { product_id, image } = req.body;

    const prodImage = await ProductImage.create({
      product_id,
      image,
      created: new Date(),
    });

    res.send(prodImage);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllImages,
  getImageByID,
  addImage,
};
