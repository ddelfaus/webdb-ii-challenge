
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {VIN: "3235521", make: "a car", model: "jeep", mileage: 350400},
        {VIN: "43254", make: "Tesla", model: "model3", mileage: 10, title: "new"},
        {VIN: "34351234", make: "Subaru", model: "Forester", mileage: 241400,  title: "used" }
   
      ]);
    });
};
