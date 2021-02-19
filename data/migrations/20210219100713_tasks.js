
exports.up = function(knex) {
    return knex.schema.createTable("tasks", tbl => {
      tbl.increments('task_id')
      tbl.string('task_description', 128).notNullable()
      tbl.string('task_notes', 128)
      tbl.boolean('task_completed').defaultTo(0).notNullable()
      tbl.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks")
};
