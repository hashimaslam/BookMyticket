const Sequelize = require("sequelize");
const Op = Sequelize.Op;
Post = require("../models/model.post");
Cities = require("../models/cities.model");
Theatres = require("../models/theatres.model");
Movies = require("../models/movies.model");
Seats = require("../models/seatmap.model");
const db = require("../config/db.config");
Cities.hasMany(Theatres);
Theatres.hasMany(Movies);
exports.view = function(req, res) {
  Post.findAll({})
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};

exports.viewcities = function(req, res) {
  Cities.findAll({})
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};
exports.viewtheatres = function(req, res) {
  Theatres.findAll({})
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};
exports.AllCityDetails = function(req, res) {
  Cities.findAll({
    include: [
      {
        model: Theatres,
        required: true,
        include: [
          {
            model: Movies,
            required: true
          }
        ]
      }
    ]
  })
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};

exports.cityDetails = function(req, res) {
  Cities.findAll({
    where: {
      city_name: req.params.city
    },
    include: [
      {
        model: Theatres,
        required: true,
        include: [
          {
            model: Movies,
            required: true
          }
        ]
      }
    ]
  })
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};

exports.viewMovies = function(req, res) {
  Movies.findAll({
    where: {
      moviesid: req.params.movieid
    }
  })
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};
exports.TheatreDetails = function(req, res) {
  Theatres.findAll({
    where: {
      id: req.params.theatreid
    },
    include: [
      {
        model: Movies,
        required: true
      }
    ]
  })
    .then(data => {
      res.json({
        message: "successs",
        data: data
      });
    })
    .catch(err => {
      res.json({
        message: err,
        data: err
      });
    });
};

exports.Seatmap = function(req, res) {
  Seats.findAll({})
    .then(data => {
      res.json({
        message: "success",
        data: data
      });
    })
    .catch(err => console.log(err));
};

exports.updateSeat = function(req, res) {
  Seats.update(
    { booked: true },
    {
      where: {
        row: req.body.row,
        seat_no: req.body.seat_no
      }
    }
  )
    .then(data => {
      res.json({
        message: "successfully booked your ticket",
        result: data
      });
    })
    .catch(err => res.send(err));
};
