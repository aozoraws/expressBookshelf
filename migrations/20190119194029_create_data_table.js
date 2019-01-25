
exports.up = function(knex, Promise) {
    return knex.schema.createTable('data', table => {
        table.increments('id')
        table.string('title')
        table.string('author')
        table.text('description')
        table.timestamps()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('data')
};
