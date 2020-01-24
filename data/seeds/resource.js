
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'Desk'},
        {id: 2, name: 'Computer'},
        {id: 3, name: 'Tv'}
      ]);
    });
};
