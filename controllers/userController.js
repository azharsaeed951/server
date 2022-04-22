const { User } = require("../models");

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
}

async function getUserByID(req, res) {
  try {
    const { id: userID } = req.params;
    const user = User.findByPk(parseInt(userID));

    res.send(user);
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  getAllUsers,
  getUserByID,
};
