
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
      tbl.increments('project_id')
      tbl.boolean('project_name').notNullable()
      tbl.string('project_description', 128)
      tbl.boolean('project_completed').defaultTo(false).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
