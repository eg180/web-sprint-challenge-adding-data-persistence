
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {task_description: "Add data!", task_notes: "Do this or die!", task_completed: true, project_id: 1}
      ]);
    });
};
