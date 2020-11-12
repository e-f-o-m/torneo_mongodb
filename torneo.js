const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient

// Use connect method to connect to the Server
client.connect(function (err, client) {
    equal(null, err);
    console.log("--- Connected correctly to server ---");
    const db = client.db(dbName);


    db.partidos.aggregate([
        { $match: { $or: [{'equipoVisitante.nombre':'Piemonte Calcio' },{'equipoLocal.nombre':'Piemonte Calcio'}]}}
        ,{$set: 
            {'Goles Equipo Buscado':
                { $size:
                    {$filter: {
                        input: "$incidencias",
                        as: "list",
                        cond: {
                            $and:[
                            {$eq: ['$$list.nombre_equipo', "Piemonte Calcio"]},
                            {$eq: ['$$list.tipo_incidencia', "gol"]}
                            ]
                        }
                        }
                    }
                },
            'Goles equipo contrario':
                { $size:
                    {$filter: {
                        input: "$incidencias",
                        as: "list",
                        cond: {
                            $and:[
                            {$ne: ['$$list.nombre_equipo', "Piemonte Calcio"]},
                            {$eq: ['$$list.tipo_incidencia', "gol"]}
                            ]
                        }
                        }
                    }
                }
            }
        }
    ]).pretty();
    
    //RESULTADO: {$sum :["$incidencias.nombre_equipo", "Piemonte Calcio"]} 

});