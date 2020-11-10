const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    

    //insertar Edición
    objEdicion = {ediciones: [
                        {
                            nombre_e: "Copa Municipal de Fútbol de 2020",
                        }
                    ]
                };

    //Insertar equipos del tornéo
    db.collection("torneo").insertOne(objEdicion, function(err, res) {
        assert.equal(null, err);
        console.log(res.insertedIds)
        client.close();
    });



    //Insertar los equipos
    objEquipos = [{  nombre_eq:"barcelona", 
                    plantilla: [ 
                        { edicion_torneo: "2020",
                            jugadores:[ 
                                    { nombre:"Juan", pos:1, "altura":180, edad:20},
                                    { nombre:"Pedro", pos:2, "altura":170, edad:27},
                                    { nombre:"Carlos", pos:4, "altura":174, edad:21}
                                ] 
                            }
                    ]
                },{  nombre_eq:"real madrid", 
                plantilla: [ 
                    { edicion_torneo: "2020",
                        jugadores:[ 
                                { nombre:"Juan2", pos:1, "altura":181, edad:22},
                                { nombre:"Pedro2", pos:2, "altura":171, edad:23},
                                { nombre:"Carlos2", pos:4, "altura":172, edad:24}
                            ] 
                        }
                ]
            }]

    //Insertar equipos del tornéo
    db.collection("equipos").insertMany(objEquipos, function(err, res) {
        assert.equal(null, err);
        //assert.equal(2, res.insertedCount);
        console.log(res.insertedIds)
        client.close();
    });




    






    //insertar los grupos (clasificacion_grupos)

    db.collection('torneo').update( 
        { "ediciones.nombre_e":"Copa Municipal de Fútbol de 2021" },
        {$set: {"ediciones.$.semifinal.siguientexd":"xxxxxxxxxxxxxx"} },
        function(err, res) {
            assert.equal(null, err);
            console.log(res.result)
            client.close();
    });


    db.collection('torneo').updateOne(
        { "ediciones.nombre_e": "Copa Municipal de Fútbol de 2020"},
        {$set: { "ediciones.$.clasificacion_grupo": [ 
                    {"grupoA":[{"id_equipo":"id", "posicion":1}] }
                ]
            }
        },
        ).done(function (err, updElem) {
              console.log("actualizado:::: " + JSON.stringify(updElem));     
       });
});