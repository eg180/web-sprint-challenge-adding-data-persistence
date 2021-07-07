
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {project_name: "my amazing project", project_description: "In this project, I do cool things.", project_completed: true}
      ]);
    });
};
