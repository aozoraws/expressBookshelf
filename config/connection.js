var database = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'dbtest',
        charset: 'utf8'
    }
};

var knex = require('knex')(database);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
  