const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const model = {};

model.user = require("./user.model");
model.role = require("./role.model");

model.ROLES = ["user", "admin", "moderator"];

module.exports = model;