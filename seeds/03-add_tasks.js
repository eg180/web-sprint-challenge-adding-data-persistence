
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {task_description: "Create optional seed files", task_notes: "Due yesterday", task_completed: true, project_id: 1}
      ]);
    });
};
