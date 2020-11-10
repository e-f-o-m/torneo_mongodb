const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("--- Connected correctly to server ---");
    const db = client.db(dbName);

    //db.people.update({name: "John"}, {$push: {friends: {firstName: "Harry", lastName: "Potter"}}});

    //{ "ediciones": {$elemMatch: {"nombre_e":"Copa Municipal de Fútbol de 2021"} }},
    //{$addFields: {"ediciones.$.semifinal":{"sig_ccccc":"cccccc"}} },

    tarjetas   = ["Amarilla", "Roja", "Azul"];
    lugar_tiros = ["Tiro libre dentro del área penal", "Tiro libre directo", "Tiro libre fuera del área de penal", "Penal" ];
    arbitros = ["Juan", "Pepe", "Carlos", "Pedro","Victor", "Roberto", "Simón", "Daniel", "Jhon" ];
    ubicaciones = ["San Petersburgo, Rusia","Foxborough, Estados Unidos","Seattle, Estados Unidos","Munich, Alemania","Atenas, Grecia"];
    estadios = ["Krestovski","Gillette Stadium","CenturyLink Field","Estadio Olímpico de Múnich","Estadio Olímpico de Atenas"];
    
    _principal = arbitros[Math.floor(Math.random() * arbitros.length)]
    _linea     = arbitros[Math.floor(Math.random() * arbitros.length)]
    _var       = arbitros[Math.floor(Math.random() * arbitros.length)]
    _aforo     = Math.round(Math.random() * (90000 - 30000) + 30000);
    _estadio   = estadios[Math.floor(Math.random() * estadios.length)]
    _minuto    = Math.round(Math.random() * (90 - 1) + 1);

    _tarjeta    = tarjetas[Math.floor(Math.random() * tarjetas.length)]
    _lugar_tiro = lugar_tiros[Math.floor(Math.random() * lugar_tiros.length)]

    console.log(
        "\n" + _principal+
        "\n" + _linea    +
        "\n" + _var      +
        "\n" + _aforo    +
        "\n" + _estadio  +
        "\n" + _minuto  
        +"---------"
        +
        "\n" + _tarjeta    +
        "\n" + _lugar_tiro    
        
        );
        
});