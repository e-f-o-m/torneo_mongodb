const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("--- Connected correctly to server ---");
  const db = client.db(dbName);

    //db.people.update({name: "John"}, {$push: {friends: {firstName: "Harry", lastName: "Potter"}}});

    //iginore
    //{ "ediciones": {$elemMatch: {"nombre_e":"Copa Municipal de Fútbol de 2021"} }},
    //{$addFields: {"ediciones.$.semifinal":{"sig_ccccc":"cccccc"}} },

    for (let index = 0; index < 100; index++) {
        console.log(Math.floor(Math.random() * 10))        
    }
        
});