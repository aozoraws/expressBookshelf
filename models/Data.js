var bookshelf = require('./../config/connection').bookshelf;

var Data = bookshelf.Model.extend({
    tableName: 'data',
});

module.exports = {
    Data: Data
};

