
exports.up = function(knex) {
  
    return knex.schema.createTable('cripto', function(table){
        
        table.increments();

        table.string('value').notNullable();

    });

};

exports.down = function(knex) {
  
    return knex.schema.dropTable('cripto');

};
