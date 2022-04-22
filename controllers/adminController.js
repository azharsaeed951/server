const { Admin } = require("../models");

async function getAdminByID(req, res) {
  try {
    const adminID = req.params.id;
    const admin = await Admin.findByPk(parseInt(adminID));

    res.send(admin);
  } catch (err) {
    res.send(err);
  }
}

async function getAllAdmins(req, res) {
  try {
    const admins = await Admin.findAll();
    res.send(admins);
  } catch (err) {
    res.send(err);
  }
}

async function addAdmin(req, res) {
  try {
    const { first_name, last_name, email, password, role, active } = req.body;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !role ||
      !active.toString()
    ) {
      return res.send("Please provide all the required info");
    }

    const user = await Admin.create({
      first_name,
      last_name,
      email,
      password,
      role,
      active,
      created: new Date(),
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
}
module.exports = {
  addAdmin,
  getAllAdmins,
  getAdminByID,
};
