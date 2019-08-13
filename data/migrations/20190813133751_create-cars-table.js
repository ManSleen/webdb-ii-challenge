exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin", 17)
      .unique()
      .notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmission-type");
    tbl.string("title-status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
