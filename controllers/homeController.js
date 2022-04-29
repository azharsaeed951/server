const mediaJSON = require("../mediaJson");

const homeController = (req, res) => {
  const response = {};
  response.data = mediaJSON;
  response.code = 200;
  response.message = "success";
  res.send(response);
};

module.exports = homeController;
