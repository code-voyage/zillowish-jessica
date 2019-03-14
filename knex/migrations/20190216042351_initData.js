/* file created by running: knex migrate:make initGallery --env development */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('houses', (table) => {
      table.increments('house_id').primary();
      table.string('name');
    }),
    knex.schema.createTable('photos', (table) => {
      table.increments('photo_id').primary();
      table.string('img_url'); 
      table.integer('img_order');
      table.integer('house_id')
            .unsigned()
            .references('house_id')
            .on('houses')
            .onDelete('cascade');
    })
  ]);
};
  
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('photos'),
    knex.schema.dropTable('houses')
  ]);
};

  
