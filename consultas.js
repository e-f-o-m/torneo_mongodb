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

      var ObjectId = require('mongodb').ObjectID;
        
      //Trae Partidos en los que ha participado un equipo
      /*db.collection("equipos").aggregate([
      {'$match' : {nombre_eq:"Bayern de Múnich"}},
      {'$lookup': {
        'from': "partidos",
        'localField': "_id",
        'foreignField': "equipoLocal.id_equipo",
        'as': "Partidos_Jugados_Local" 
       }},
        {'$lookup': {
         'from': "partidos",
         'localField': "_id",
         'foreignField': "equipoVisitante.id_equipo",
         'as': "Partidos_Jugados_Visitante"
         }} 
      ]
      , function(err, res){
          res.toArray(function(err, doc){
            console.log(doc)               
            console.log(JSON.stringify(doc,undefined,4))
          })
          
        }); */
        
        
      /* //Trae Partidos por jugador
      db.collection("equipos").aggregate([
        {'$match' : {"plantilla.jugadores.nombre":"Messi"}},
        { '$project': { "_id": 1 } } 
        ]
        , function(err, res){
            res.toArray(function(err, doc){
              console.log(doc)               
              console.log(JSON.stringify(doc,undefined,3))

        //Trae Partidos en los que ha participado un equipo
        db.collection("equipos").aggregate([
              {'$match' : {_id: ObjectId(doc[0]._id)}},
              {'$lookup': {
                'from': "partidos",
                'localField': "_id",
                'foreignField': "equipoLocal.id_equipo",
                'as': "Partidos_Jugados_Local" 
              }},
                {'$lookup': {
                'from': "partidos",
                'localField': "_id",
                'foreignField': "equipoVisitante.id_equipo",
                'as': "Partidos_Jugados_Visitante"
                }} 
              ]
              , function(err, res){
                  res.toArray(function(err, doc){
                    console.log(doc.Partidos_Jugados_Visitante[0].equipoLocal.id_equipo)               
                    //console.log(JSON.stringify(doc,undefined,4))
                    client.close();
                  })
                });
                  
            })

          }); */



          //Trae Partidos por jugador
          /* db.collection("partidos").aggregate([
              {'$match' : { '$or': [
                                {"equipoLocal.incidencias.tiros.id_jugador.nombre":"Oblak"},
                                {"equipoLocal.incidencias.sustituciones.id_jugador.nombre":"Oblak"},
                                {"equipoLocal.incidencias.faltas.id_jugador.nombre":"Oblak"},
                                {"equipoLocal.incidencias.goles.id_jugador.nombre":"Oblak"},
                                {"equipoVisitante.incidencias.tiros.id_jugador.nombre":"Oblak"},
                                {"equipoVisitante.incidencias.sustituciones.id_jugador.nombre":"Oblak"},
                                {"equipoVisitante.incidencias.faltas.id_jugador.nombre":"Oblak"},
                                {"equipoVisitante.incidencias.goles.id_jugador.nombre":"Oblak"}
                              ]
                        }
              },
              { '$project': { 
                  "equipoLocal.incidencias.goles": {'$filter': {
                      'input': "$equipoLocal.incidencias.goles",
                      'as': "list",
                      'cond': {$eq: ['$$list.id_jugador.nombre', "Oblak"]} //<-- filter sub-array based on condition
                  }
                }          
              }
            }
            ]
            , function(err, res){
                res.toArray(function(err, doc){
                  console.log(JSON.stringify(doc, undefined, 4))
                  client.close();

              });
        });//fin busqueda */

        //** Toda la información de un partido filtrando por torneo y equipo. **
        //📌 (buscar) partidos -> (un aggregate, un match por equipipo y torneo. (ir hasta incidencias)  y  un group con _id:nombre grupo, resultados[{colombia: GA GC EP...}])
        
        
        db.collection("partidos").aggregate([
          {'$match' : {"equipoLocal.incidencias.goles.id_jugador.nombre":"Oblak"} }
          ,{"$group": { "_id": "$equipoLocal.incidencias.goles"} }
          ,{ '$project': { 
            "_id": {'$filter': {
                'input': "$_id.id_jugador",
                'as': "list",
                'cond': {$eq: ['$$list.nombre', "Oblak"]} //<-- filter sub-array based on condition
              }
            }
          }       
        }
        ],
          function(err, res){
            res.toArray(function(err, doc){
              console.log(JSON.stringify(doc, undefined, 4));
              client.close();
          });
    });//fin busqueda

        
});//fin conect


  
  /* 
  db.collection('partidos').find({
      "$ref" : "torneo",
      "$id" : ObjectId("5fa77c730e2947316854be01"),
      "$db" : "torneo_futbol"
    }
 ).toArray(function(err, result) {
    if (err) throw err;
    console.log("--------------------------------------------")
    console.log(JSON.stringify(result, undefined, 4));
    console.log("--------------------------------------------")
    client.close();
  }); 
  db.equipos.find( {"_id": ObjectId("5fa725b51b24c432a803bec9")} )
  
  db.Equipos.aggregate([{$match: {_id: ObjectId("5fa1db095675be151cefbf0a")}},
  {$lookup: {from: 'Partidos',localField: '_id',foreignField: 'eLocal',as: 'equi'}}]).pretty();
  
  db.getCollection('requests').find({
    "sections.questions.answerOptions.fieldName":"Global Deployment?"
    }).map(function(item){
    return item.fieldValue
  })
  
  */