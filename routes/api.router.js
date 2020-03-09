const router = require("express").Router();
const PostController = require("../controllers/pos.controller");
//testing end points
router.route("/posts").get(PostController.view);
router.route("/cities").get(PostController.viewcities);
router.route("/theatres").get(PostController.viewtheatres);
router.route("/citydetails").get(PostController.AllCityDetails);

//usable endpoints
router.route("/view/:city").get(PostController.cityDetails);
router.route("/movies/:movieid").get(PostController.viewMovies);
router.route("/theatredetails/:theatreid").get(PostController.TheatreDetails);
router.route("/seatmap").get(PostController.Seatmap);
router.route("/bookticket").put(PostController.updateSeat);

module.exports = router;
