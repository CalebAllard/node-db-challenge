
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'first Project'},
        {id: 2, name: 'Second Project'},
        {id: 3, name: 'Thid Project'},
        {id: 4, name:'forth project'}
      ]);
    });
};
