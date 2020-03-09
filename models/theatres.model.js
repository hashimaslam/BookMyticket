const Sequelize = require("sequelize");
const db = require("../config/db.config");
const item = require("./sample");

let Theatres = db.define(
  "theatres",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    theatre_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    underscored: true
  }
);

// Theatres.sync({ force: true }).then(function() {
//   return Theatres.bulkCreate(item.items)
//     .then(data => {
//       console.log("successfully created table theatres");
//     })

//     .catch(err => console.log(err));
// });
module.exports = Theatres;
