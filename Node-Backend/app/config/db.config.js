const mongoose = require("mongoose");
const initial = require('../controllers/role.controller')

const dbURL =
  "mongodb+srv://mahri:hatyja08@cluster0.xn0wt.mongodb.net/User?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
    initial();
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

module.exports = mongoose;
