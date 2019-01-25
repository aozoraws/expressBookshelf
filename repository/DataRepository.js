var express = require('express');
var Model = require('./../models/Data');

/* Data Index */
var index = function(req,res,next){
  new Model.Data().fetchAll().then(function(data){
    res.render('index',{ 
      title: "Data",
      image: "user.png",
      data: data.toJSON(),
      segment: req.path.split('/')
    })
  })
};

/* Create Data View */
var create = function(req,res){
  res.render('create',{
    title: "Insert Data",
    image: "create.jpg",
    segment: req.path.split('/')
  })
};

/* Data Create */
var insert = function (req, res) {
	new Model.Data({
    title:req.body.title,
    author:req.body.author,
    description:req.body.description
	}).save()
		.then(function (user) {
      res.redirect('back');
		}).catch(function (error) {
			console.log(error);
			res.send(error);
		});
};


var detail = function(req,res){
	new Model.Data().where('id', req.params.id).fetch().then(function(data){
      res.render('create',{
        title: "Edit Data",
        image: "god.jpg",
        data: data.toJSON(),
        segment: req.path.split('/')
      })
    })
		.catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

var update = function(req,res){
  new Model.Data().where('id', req.body.id).save({
    title:req.body.title,
    author:req.body.author,
    description:req.body.description
  },{method:'update'}).then(function(data){
    // res.send(data);
    res.redirect('back');
  }).catch(function (error) {
    console.log(error);
    res.send('An error occured');
  });
};

/* Data Destroy */
var destroy = function (req, res,next) {
	new Model.Data().where('id', req.body.dataID)
		.destroy().then(function(){
      res.redirect('back');
    })
		.catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

module.exports = {
  Index: index,

  Create: create,
  Insert: insert,

  Destroy: destroy,

  Detail: detail,
  Update: update
};
