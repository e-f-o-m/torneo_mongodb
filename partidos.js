const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { exit } = require('process');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient
const ObjectID = require('mongodb').ObjectID;

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("--- Connected correctly to server ---");

    const db = client.db(dbName);


    db.collection("equipos").aggregate([
        { '$project': { "plantilla.jugadores": 1, "plantilla.edicion_torneo": 1, "plantilla._id": 1, "nombre_eq": 1 } }
    ]).toArray(function (err, doc) {

            var objPartidos = [
                generaPartido("torneo","clasificacion", "a",  {"nombre_eq":doc[0].nombre_eq,"id_equipo":doc[0]._id,"id_plantilla":doc[0].plantilla[0]._id,"jugadores":doc[0].plantilla[0].jugadores}, 
                               {"nombre_eq":doc[1].nombre_eq,"id_equipo":doc[1]._id,"id_plantilla":doc[1].plantilla[0]._id,"jugadores":doc[1].plantilla[0].jugadores}, 
                                "2020/10/10", "2020/10/10"),
                generaPartido("torneo","clasificacion", "a",  {"nombre_eq":doc[2].nombre_eq,"id_equipo":doc[2]._id,"id_plantilla":doc[2].plantilla[0]._id,"jugadores":doc[2].plantilla[0].jugadores}, 
                               {"nombre_eq":doc[3].nombre_eq,"id_equipo":doc[3]._id,"id_plantilla":doc[3].plantilla[0]._id,"jugadores":doc[3].plantilla[0].jugadores}, 
                                "2020/10/10", "2020/10/10"),
                generaPartido("torneo","clasificacion", "a",  {"nombre_eq":doc[4].nombre_eq,"id_equipo":doc[4]._id,"id_plantilla":doc[4].plantilla[0]._id,"jugadores":doc[4].plantilla[0].jugadores}, 
                               {"nombre_eq":doc[5].nombre_eq,"id_equipo":doc[5]._id,"id_plantilla":doc[5].plantilla[0]._id,"jugadores":doc[5].plantilla[0].jugadores}, 
                                "2020/10/10", "2020/10/10"),
                generaPartido("torneo","clasificacion", "a",  {"nombre_eq":doc[6].nombre_eq,"id_equipo":doc[6]._id,"id_plantilla":doc[6].plantilla[0]._id,"jugadores":doc[6].plantilla[0].jugadores}, 
                               {"nombre_eq":doc[7].nombre_eq,"id_equipo":doc[7]._id,"id_plantilla":doc[7].plantilla[0]._id,"jugadores":doc[7].plantilla[0].jugadores}, 
                                "2020/10/10", "2020/10/10"),
                generaPartido("torneo","clasificacion", "a",  {"nombre_eq":doc[8].nombre_eq,"id_equipo":doc[8]._id,"id_plantilla":doc[8].plantilla[0]._id,"jugadores":doc[8].plantilla[0].jugadores}, 
                               {"nombre_eq":doc[9].nombre_eq,"id_equipo":doc[9]._id,"id_plantilla":doc[9].plantilla[0]._id,"jugadores":doc[9].plantilla[0].jugadores}, 
                                "2020/10/10", "2020/10/10"),
                generaPartido("torneo","clasificacion", "a",  {"nombre_eq":doc[10].nombre_eq,"id_equipo":doc[10]._id,"id_plantilla":doc[10].plantilla[0]._id,"jugadores":doc[10].plantilla[0].jugadores}, 
                               {"nombre_eq":doc[11].nombre_eq,"id_equipo":doc[11]._id,"id_plantilla":doc[11].plantilla[0]._id,"jugadores":doc[11].plantilla[0].jugadores}, 
                                "2020/10/10", "2020/10/10")
            ]
            
            objPartidos.map(item => console.log(item.incidencias.map(it => it.detalles )));
            client.close();
            /* db.collection("partidos").insert(objPartidos, function(err, resu) {
                assert.equal(null, err);
                console.log(resu.insertedIds)
                console.log("Insertado: partidos");
                client.close();
            }); */

        })

});


function generaPartido(_torneo,_fase,_grupo,local, visitante, _inicio, _fin) {
    tarjetas = ["Amarilla", "Roja", "azul"];
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

    //Incidencias aleatorias
    _nIncidencias =  Math.round(Math.random() * (4 - 1) + 1); 
    _arrayIncidencias = []
    for (i = 0, s = Math.round(Math.random() * (_nIncidencias - 1) + 1); i < s; i++) {
        
        _minuto = Math.round(Math.random() * (90 - 1) + 1);
        
        binRandom = Math.round(Math.random() * (0 - 1) + 1);
        _equipo = [local, visitante][binRandom]
        _jugador = _equipo.jugadores[Math.floor(Math.random() * 7)].nombre

        _tipo_incidencia =""
        _detalles=""
        //6 tipos de incidencias
        var i = [4,4,4,4,4,0,1,2,3,5,6][Math.floor(Math.random() * 11)];
        console.log(i);
        console.log("bin = "+binRandom);
        console.log([visitante,local][binRandom].jugadores[Math.floor(Math.random() * 7)].nombre);
        switch (i) {
            case binRandom: //falta simple
                _tipo_incidencia="falta"; _detalles = [visitante,local][binRandom].jugadores[Math.floor(Math.random() * 7)].nombre; break;
            case 2:
                _tipo_incidencia="sustitucion"; _detalles = _equipo.jugadores[Math.floor(Math.random() * 7)].nombre; break;
            case 3:
                _tipo_incidencia="tiro"; _detalles = lugar_tiros[Math.floor(Math.random() * lugar_tiros.length)]; break;
            case 4:
                _tipo_incidencia="gol"; _detalles = 1; break;
            case 5:
                _tipo_incidencia="autogol"; _detalles = 1; break;
            case 6:
                _tipo_incidencia="terjeta"; _detalles = tarjetas[Math.floor(Math.random() * tarjetas.length)]; break;
            default:
                _tipo_incidencia="tiro"; _detalles = lugar_tiros[Math.floor(Math.random() * lugar_tiros.length)]; break;
        }
        _arrayIncidencias.push(
            {
                nombre_equipo : _equipo.nombre_eq,
                jugador: _jugador,
                minuto: _minuto,
                tipo_incidencia: _tipo_incidencia,
                detalles: _detalles
            }
        )
    }

    var objPartido = {
        inicio: _inicio,
        fin: _fin,
        estadio: _estadio,
        arbitros: _arbitro,
        torneo: _torneo,
        fase:_fase,
        grupo:_grupo,
        equipoLocal: {
            id_equipo: local.id_equipo,
            nombre:local.nombre_eq,
            id_plantilla: local.id_plantilla,
        },
        equipoVisitante: {
            id_equipo: visitante.id_equipo,
            nombre:visitante.nombre_eq,
            id_plantilla: visitante.id_plantilla,
        },
        incidencias: _arrayIncidencias
    }

    return objPartido;
}
