const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require('../models/Movie.model');



router.get("/movies", (req, res, next) => {

Movie.find()
.then(moviesFromDb =>{

    const data = {
        movies: moviesFromDb
    }

    console.log(data)

    res.render("movies", data)
})
.catch(e => {
    console.log("error getting movies from DB", e);
    next(e);
  });

})

router.get("/movies/:id", (req, res, next) =>{
   
    const {id} = req.params;    
    
    console.log(req.params)

    Movie.findById(id)
    .then(movieFromD =>{
        console.log(movieFromD)
        res.render("movie-details", {movie: movieFromD })
    })
})


module.exports = router;