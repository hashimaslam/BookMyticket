const Sequelize = require("sequelize");
const db = require("../config/db.config");
seats = require("./seatmap");

let Seats = db.define(
  "seats",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    row: {
      type: Sequelize.STRING
    },
    seat_no: {
      type: Sequelize.INTEGER
    },
    booked: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    freezeTableName: true,
    underscored: true
  }
);

// Seats.sync({ force: true }).then(function() {
//   return Seats.bulkCreate(seats)
//     .then(data => {
//       console.log("successfully created table seatmap");
//       // console.log(items);
//     })

//     .catch(err => console.log(err));
// });

module.exports = Seats;
