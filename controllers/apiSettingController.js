const { ApiSetting } = require("../models");
const apisetting = require("../models/apisetting");

async function getAllApiSettings(req, res) {
  const apiSetting = await ApiSetting.findAll();
  res.send(apiSetting);
}

module.exports = {
  getAllApiSettings,
};
