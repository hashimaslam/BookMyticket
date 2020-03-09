const Sequelize = require("sequelize");
const db = require("../config/db.config");
var item = require("./sample");

let Movies = db.define(
  "movies",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    moviesid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    theatre_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false
    },
    poster_path: {
      type: Sequelize.STRING,
      allowNull: false
    },
    genre_ids: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    vote_count: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    vote_average: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    now_showing: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    freezeTableName: true,
    underscored: true
  }
);

// Movies.sync({ force: true }).then(function() {
//   return Movies.bulkCreate(item.datarr)
//     .then(data => {
//       console.log("successfully created table Movies");
//       // console.log(items);
//     })

//     .catch(err => console.log(err));
// });

module.exports = Movies;
