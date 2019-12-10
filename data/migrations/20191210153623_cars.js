
exports.up = function(knex) {
    return knex.schema.createTable("car", tbl => {
     
        tbl.increments();

        tbl.string("VIN", 255)
        .notNullable()
        .unique()
        .index(); 

        tbl.string("make", 255)
        .notNullable()
        .index(); 
        
        tbl.string("model", 255)
        .notNullable()
        .index(); 

        tbl.float("mileage", 255)
        .notNullable()
        .index(); 

        tbl.string("transmission type", 255)
       
        .index(); 

        tbl.string("title", 255)
       
        .index(); 

    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car");
};
