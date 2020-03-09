const Sequelize = require("sequelize");
const db = require("../config/db.config");
const fetch = require("node-fetch");
let items = [];
var Post = db.define(
  "posts",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  },
  {
    freezeTableName: true
  }
);

// Post.sync({ force: true }).then(function() {
//   fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US&page=1`
//   )
//     .then(res => res.json())
//     .then(data => {
//       data.results.map(item => {
//         items.push({ id: item.id });
//       });
//       console.log(items);
//       return Post.bulkCreate(items).then(data => {});
//     })
//     .catch(err => console.log(err));
// });

module.exports = Post;
