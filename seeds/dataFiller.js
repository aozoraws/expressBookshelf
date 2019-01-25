
exports.seed = function(knex, Promise) {
    return knex('data').insert([
      {title: 'rowValue11',author: 'rowValue21',description: 'rowValue31'},
      {title: 'rowValue12',author: 'rowValue22',description: 'rowValue32'},
      {title: 'rowValue13',author: 'rowValue23',description: 'rowValue33'},
      {title: 'rowValue14',author: 'rowValue24',description: 'rowValue34'},
      {title: 'rowValue15',author: 'rowValue25',description: 'rowValue35'},
    ]);
};

// var faker = require('faker');

// let createRecord = (knex, id) => {
//   return knex('users').insert({
//     id,
//     username: faker.internet.userName(),
//     email: faker.internet.exampleEmail(),
//     created_at: new Date(),
//     updated_at: new Date()
//   })
// }

// exports.seed = (knex, Promise) => {
//   return knex('users').del()
//     .then(() => {
//       let records = [];

//       for (let i = 1; i < 10; i++) {
//         records.push(createRecord(knex, i))
//       }

//       return Promise.all(records);
//     });
// };