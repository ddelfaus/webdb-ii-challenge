
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {VIN: "3235521", make: "a car", model: "jeep", mileage: 350400}
   
      ]);
    });
};
