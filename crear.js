const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/torneo_futbol'; // Connection URL
const dbName = 'torneo_futbol';                 // Database Name
const client = new MongoClient(url);            // Create a new MongoClient

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    //Crear colección torneo
    db.createCollection("torneo", function(err, res) {
        if(err) throw err;
    });
    //Crear colección partidos
    db.createCollection("partidos", function(err, res) {
        if(err) throw err;
    });
    //Crear colección equipos
    db.createCollection("equipos", function(err, res) {
        if(err) throw err;
    });
    client.close();
});