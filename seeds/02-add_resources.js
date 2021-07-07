
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {resource_name: "laptop", resource_description: "The secret weapon"},
        {resource_name: "brain", resource_description: "The dangerous weapon"}
      ]);
    });
};
