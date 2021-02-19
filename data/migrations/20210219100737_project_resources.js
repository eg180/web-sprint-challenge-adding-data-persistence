
exports.up = function(knex) {
    return knex.schema.createTable("project_resources", tbl => {
      tbl.increments('project_resource_id')
      tbl.integer('project')
        .unsigned()
        .references('project_id')
        .inTable('projects')
      tbl.integer('resource')
        .unsigned()
        .references('resource_id')
        .inTable('resources')

  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("project_resources")
};
