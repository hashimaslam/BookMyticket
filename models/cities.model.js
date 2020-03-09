const Sequelize = require("sequelize");
const db = require("../config/db.config");
cities = require("./citysample");

let Cities = db.define(
  "cities",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    city_name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    underscored: true
  }
);

// Cities.sync({ force: true }).then(function() {
//   return Cities.bulkCreate(cities)
//     .then(data => {
//       console.log("successfully created table cities");
//       // console.log(items);
//     })

//     .catch(err => console.log(err));
// });

module.exports = Cities;
