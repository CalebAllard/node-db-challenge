
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
    tbl.increments();
    tbl.text('name', 128)
        .notNullable();
    tbl.string('description');
    tbl.boolean('completed').defaultTo(false);
        
  }).createTable('resource', tbl => {
    tbl.increments();
    tbl.text('name',128)
        .notNullable();
    tbl.string('description');
    
    
        
  }).createTable('task', tbl => {
    tbl.increments();
    tbl.string('description')
        .notNullable();
    tbl.text('notes');
    tbl.boolean('completed').defaultTo(false);
    tbl.integer('project_id')
        .references('id')
        .inTable('task')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        
  }).createTable('project_resources', tbl => {
    tbl.increments();
    tbl.integer('project_id')
        .references('id')
        .inTable('project')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        
    tbl.integer('resource_id')
        .references('id')
        .inTable('resource')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
        
  });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('project')
    .dropTableIfExists('task')
    .dropTableIfExists('resource');
};
