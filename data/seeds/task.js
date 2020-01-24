
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'Task 1', project_id: 1},
        {id: 2, description: 'Task 2', project_id: 2 },
        {id: 3, description: 'Task 3', project_id: 3}
      ]);
    });
};
