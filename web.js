var indexRouter = require('./repository/IndexRepository');
var usersRouter = require('./repository/DataRepository');
var express = require('express');

module.exports = function (app,res,req) {

	app.use('/static',express.static('public'));
	/* Index(main) route */
	app.get('/', indexRouter.Index);

	app.get('/data', usersRouter.Index);

	app.get('/data/create', usersRouter.Create);
	app.post('/data/create', usersRouter.Insert);

	app.get('/data/detail/:id', usersRouter.Detail);
	app.post('/data/detail/',usersRouter.Update);

	app.post('/data/delete/', usersRouter.Destroy);
};