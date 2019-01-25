var express = require('express');
var router = express.Router();

// User.fetchAll().then(function(user){
//   console.log(user.toJSON());
// });

/* indexRouter's Index */
var index = function(req,res,next){
  res.render('index',{ 
    title: "Landing Page",
    image: "admin.jpg",
    segment: req.path.split('/')
  })
};

module.exports = {
  Index: index
};
