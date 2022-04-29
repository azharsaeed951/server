const { Admin } = require("../models");
const Joi = require("joi");

async function getAdminByID(req, res) {
  try {
    const adminID = req.params.id;
    const admin = await Admin.findByPk(parseInt(adminID));
    const a = {};
    a.error = "Error found";
    a.message = "success";
    a.data = admin;
    res.send(a);
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
    const schema = Joi.object({
      first_name: Joi.string().min(3).required(),
      last_name: Joi.string().min(3).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      role: Joi.string().required(),
      active: Joi.number.required(),
    });

    const error = schema.validate({
      first_name,
      last_name,
      email,
      password,
      role,
      active,
    });

    console.log(error);

    if (error) {
      return res.status(400).send(error.details[0].message);
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
