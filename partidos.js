const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient
const ObjectID = require('mongodb').ObjectID;



// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("--- Connected correctly to server ---");


    const db = client.db(dbName);

    var plantilla;

    db.collection("equipos").aggregate([
        { '$project': { "plantilla.jugadores": 1, "plantilla.edicion_torneo": 1, "plantilla._id": 1 } }
    ])
        .toArray(function (err, doc) {
            //console.log( doc)
            //doc.forEach(element => console.log(element.plantilla.jugadores.pos)) 
            local = { "id_equipo": doc[0]._id, "id_plantilla": doc[0].plantilla[0]._id, "jugadores": doc[0].plantilla[0].jugadores }
            visitante = { "id_equipo": doc[1]._id, "id_plantilla": doc[1].plantilla[0]._id, "jugadores": doc[1].plantilla[0].jugadores }
            console.log(generaPartido(local, visitante, "2020/10/10", "2020/10/10"))

            //Repetir
            local = { "id_equipo": doc[0]._id, "id_plantilla": doc[0].plantilla[0]._id, "jugadores": doc[0].plantilla[0].jugadores }
            visitante = { "id_equipo": doc[1]._id, "id_plantilla": doc[1].plantilla[0]._id, "jugadores": doc[1].plantilla[0].jugadores }
            console.log(generaPartido(local, visitante, "2020/10/10", "2020/10/10"))

        })
    client.close();

});




/*
console.log("--------------------------------------------")
        console.log(JSON.stringify(item, undefined, 4));
        console.log("--------------------------------------------")
        client.close();
        
        jugadores = res.map(function(item){
            return item.plantilla[0].jugadores
        })
        plantilla.toArray(function(err, result){
            console.log(result)
        });
 */


function generaPartido(local, visitante, _inicio, _fin) {
    tarjetas = ["Amarilla", "Roja", "Azul"];
    lugar_tiros = ["Tiro libre dentro del área penal", "Tiro libre directo", "Tiro libre fuera del área de penal", "Penal"];
    arbitros = ["Juan", "Pepe", "Carlos", "Pedro", "Victor", "Roberto", "Simón", "Daniel", "Jhon"];
    ubicaciones = ["San Petersburgo, Rusia", "Foxborough, Estados Unidos", "Seattle, Estados Unidos", "Munich, Alemania", "Atenas, Grecia"];
    estadios = ["Krestovski", "Gillette Stadium", "CenturyLink Field", "Estadio Olímpico de Múnich", "Estadio Olímpico de Atenas"];

    _arbitro = {
        "principal": arbitros[Math.floor(Math.random() * arbitros.length)],
        "linea": arbitros[Math.floor(Math.random() * arbitros.length)],
        "var": arbitros[Math.floor(Math.random() * arbitros.length)],
    }
    _estadio = {
        "nombre": estadios[Math.floor(Math.random() * estadios.length)],
        "ubicacion": ubicaciones[Math.floor(Math.random() * ubicaciones.length)],
        "aforo": Math.round(Math.random() * (90000 - 30000) + 30000)
    }

    _minuto = Math.round(Math.random() * (90 - 1) + 1);

    arrLocTiros = [];
    arrLocSustituciones = [];
    arrLocFaltas = [];
    arrLocGoles = [];
    for (i = 0, s = Math.round(Math.random() * (6 - 1) + 1); i < s; i++) {
        _tarjeta = tarjetas[Math.floor(Math.random() * tarjetas.length)]
        _lugar_tiro = lugar_tiros[Math.floor(Math.random() * lugar_tiros.length)]
        _minuto = Math.round(Math.random() * (90 - 1) + 1);

        arrLocTiros.push({ id_jugador: local.jugadores[Math.floor(Math.random() * 7)], lugar: _lugar_tiro, minuto: _minuto });
        arrLocSustituciones.push({ sale_id_jug: local.jugadores[Math.floor(Math.random() * 7)], entra_id_jug: local.jugadores[Math.floor(Math.random() * 7)], minuto: _minuto });
        arrLocFaltas.push({ id_causante: local.jugadores[Math.floor(Math.random() * 7)], id_afectado: visitante.jugadores[Math.floor(Math.random() * 7)], tarjeta: _tarjeta, minuto: _minuto });
        arrLocGoles.push({ id_jugador: local.jugadores[Math.floor(Math.random() * 7)], minuto: _minuto });
    }
    arrVisTiros = [];
    arrVisSustituciones = [];
    arrVisFaltas = [];
    arrVisGoles = [];

    for (i = 0, s = Math.round(Math.random() * (6 - 1) + 1); i < s; i++) {
        _tarjeta = tarjetas[Math.floor(Math.random() * tarjetas.length)]
        _lugar_tiro = lugar_tiros[Math.floor(Math.random() * lugar_tiros.length)]
        _minuto = Math.round(Math.random() * (90 - 1) + 1);

        arrVisTiros.push({ id_jugador: visitante.jugadores[Math.floor(Math.random() * 7)], lugar: _lugar_tiro, minuto: _minuto });
        arrVisSustituciones.push({ sale_id_jug: visitante.jugadores[Math.floor(Math.random() * 7)], entra_id_jug: visitante.jugadores[Math.floor(Math.random() * 7)], minuto: _minuto });
        arrVisFaltas.push({ id_causante: visitante.jugadores[Math.floor(Math.random() * 7)], id_afectado: local.jugadores[Math.floor(Math.random() * 7)], tarjeta: _tarjeta, minuto: _minuto });
        arrVisGoles.push({ id_jugador: visitante.jugadores[Math.floor(Math.random() * 7)], minuto: _minuto });
    }


    var objPartido = {
        "_id": new ObjectID(),
        inicio: _inicio,
        fin: _fin,
        estadio: _estadio,
        arbitros: _arbitro,
        equipoLocal: {
            id_equipo: local.id_equipo,
            id_plantilla: local.id_plantilla,
            incidencias: {
                arrLocTiros,
                arrLocSustituciones,
                arrLocFaltas,
                arrLocGoles
            }
        },
        equipoVisitante: {
            id_equipo: visitante.id_equipo,
            id_plantilla: visitante.id_plantilla,
            incidencias: {
                arrVisTiros,
                arrVisSustituciones,
                arrVisFaltas,
                arrVisGoles
            }
        }
    }

    return objPartido;
}
