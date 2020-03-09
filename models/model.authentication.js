const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Signup = db.define(
  "signup",
  {
    number: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true
  }
);

// Signup.sync({ force: true }).then(function() {
//   return Signup.create({
//     number: "7000790258",
//     email: "rohit@gmail.com",
//     password: "Zgv674",
//     username: "mv007"
//   })
//     .then(data => {
//       console.log("signup table created ");
//     })
//     .catch(err => console.log(err));
// });

module.exports = Signup;
