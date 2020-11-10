const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//const { ObjectID, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'torneo_futbol';          // Database Name
const client = new MongoClient(url);     // Create a new MongoClient
const ObjectID = require('mongodb').ObjectID;

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    objEquipos = [{
        nombre_eq: "Atlético de Madrid ",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Oblak", pos: 1, "altura": 185, edad: 25 },
                    { _id: new ObjectID(), nombre: "N'Golo Kanté", pos: 18, "altura": 177, edad: 29 },
                    { _id: new ObjectID(), nombre: "Eriksen", pos: 30, "altura": 178, edad: 29 },
                    { _id: new ObjectID(), nombre: "Jordi Alba", pos: 42, "altura": 176, edad: 19 },
                    { _id: new ObjectID(), nombre: "Jan Vertonghen", pos: 54, "altura": 191, edad: 27 },
                    { _id: new ObjectID(), nombre: "Milan Škriniar", pos: 66, "altura": 187, edad: 36 },
                    { _id: new ObjectID(), nombre: "Varane", pos: 78, "altura": 200, edad: 33 }

                ]
            }
        ]
    },{
        nombre_eq: "Barcelona",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Messi", pos: 1, "altura": 178, edad: 35 },
                    { _id: new ObjectID(), nombre: "Sergio Agüero", pos: 13, "altura": 174, edad: 41 },
                    { _id: new ObjectID(), nombre: "Aubameyang", pos: 25, "altura": 197, edad: 29 },
                    { _id: new ObjectID(), nombre: "Godín", pos: 37, "altura": 174, edad: 41 },
                    { _id: new ObjectID(), nombre: "Aymeric Laporte", pos: 49, "altura": 186, edad: 23 },
                    { _id: new ObjectID(), nombre: "Marquinhos", pos: 61, "altura": 183, edad: 27 },
                    { _id: new ObjectID(), nombre: "Daniel Parejo", pos: 73, "altura": 198, edad: 31 }

                ]
            }
        ]
    },{
        nombre_eq: "Bayern de Múnich",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Mohamed Salah ", pos: 1, "altura": 181, edad: 39 },
                    { _id: new ObjectID(), nombre: "Griezmann", pos: 20, "altura": 182, edad:28 },
                    { _id: new ObjectID(), nombre: "Cavani", pos: 32, "altura": 187, edad: 37 },
                    { _id: new ObjectID(), nombre: "Fernandinho", pos: 44, "altura": 184, edad: 26 },
                    { _id: new ObjectID(), nombre: "Joshua Kimmich", pos: 56, "altura": 181, edad: 23 },
                    { _id: new ObjectID(), nombre: "Thomas Müller", pos: 68, "altura": 186, edad: 26 },
                    { _id: new ObjectID(), nombre: "Axel Witsel", pos: 80, "altura": 183, edad: 27 }

                ]
            }
        ]
    },{
        nombre_eq: "Chelsea",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Mbappé", pos: 1, "altura": 192, edad: 19 },
                    { _id: new ObjectID(), nombre: "De Gea", pos: 23, "altura": 197, edad:29 },
                    { _id: new ObjectID(), nombre: "David Silva", pos: 35, "altura": 193, edad: 27 },
                    { _id: new ObjectID(), nombre: "Bernardo Silva", pos: 47, "altura": 181, edad: 38 },
                    { _id: new ObjectID(), nombre: "Di María", pos: 59, "altura": 192, edad: 31 },
                    { _id: new ObjectID(), nombre: "Isco", pos: 71, "altura": 182, edad: 24 },
                    { _id: new ObjectID(), nombre: "Alex Sandro", pos: 83, "altura": 18, edad: 30 }

                ]
            }
        ]
    },{
        nombre_eq: "Liverpool",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Van Dijk", pos: 1, "altura": 198, edad: 29 },
                    { _id: new ObjectID(), nombre: "Alisson", pos: 19, "altura": 196, edad:35 },
                    { _id: new ObjectID(), nombre: "Pogba", pos: 31, "altura": 197, edad: 27 },
                    { _id: new ObjectID(), nombre: "Mats Hummels", pos: 43, "altura": 193, edad: 21 },
                    { _id: new ObjectID(), nombre: "Keylor Navas", pos: 55, "altura": 191, edad: 40 },
                    { _id: new ObjectID(), nombre: "Samuel Umtit", pos: 67, "altura": 177, edad: 28 },
                    { _id: new ObjectID(), nombre: "Andrew Robertson", pos: 79, "altura": 168, edad: 31 }

                ]
            }
        ]
    },{
        nombre_eq: "Manchester City",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Kevin de Bruyne", pos: 1, "altura": 186, edad: 37 },
                    { _id: new ObjectID(), nombre: "Kalidou Koulibaly", pos: 17, "altura": 176, edad:33 },
                    { _id: new ObjectID(), nombre: "Kroos", pos: 29, "altura": 191, edad: 30 },
                    { _id: new ObjectID(), nombre: "Benzema", pos: 41, "altura": 170, edad: 41 },
                    { _id: new ObjectID(), nombre: "Lorenzo Insigne", pos: 53, "altura": 185, edad: 21 },
                    { _id: new ObjectID(), nombre: "Rakitić", pos: 65, "altura": 186, edad: 39 },
                    { _id: new ObjectID(), nombre: "Frenkie de Jong", pos: 77, "altura": 173, edad: 25 }

                ]
            }
        ]
    },{
        nombre_eq: "Manchester United",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Sergio Ramos", pos: 1, "altura": 178, edad: 40 },
                    { _id: new ObjectID(), nombre: "Raheem Sterling", pos: 24, "altura": 197, edad:32 },
                    { _id: new ObjectID(), nombre: "Hugo Lloris", pos: 36, "altura": 175, edad: 22 },
                    { _id: new ObjectID(), nombre: "Thiago", pos: 48, "altura": 179, edad: 25 },
                    { _id: new ObjectID(), nombre: "Alexandre Lacazette", pos: 60, "altura": 191, edad: 36 },
                    { _id: new ObjectID(), nombre: "Wojciech Szczęsny", pos: 72, "altura": 196, edad: 35 },
                    { _id: new ObjectID(), nombre: "Niklas Süle", pos: 84, "altura": 184, edad: 32 }

                ]
            }
        ]
    },{
        nombre_eq: "Nápoles",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Ter Stegen", pos: 10, "altura": 172, edad: 39 },
                    { _id: new ObjectID(), nombre: "Luis Suárez", pos: 22, "altura": 184, edad:18 },
                    { _id: new ObjectID(), nombre: "Ederson", pos: 34, "altura": 175, edad: 41 },
                    { _id: new ObjectID(), nombre: "Toby Alderweireld", pos: 46, "altura": 192, edad: 32 },
                    { _id: new ObjectID(), nombre: "Pjanić", pos: 58, "altura": 179, edad: 32 },
                    { _id: new ObjectID(), nombre: "Ciro Immobile", pos: 70, "altura": 175, edad: 39 },
                    { _id: new ObjectID(), nombre: "Fabinho", pos: 82, "altura": 184, edad: 28 }

                ]
            }
        ]
    }, {
        nombre_eq: "Piemonte Calcio",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Cristiano Ronaldo", pos: 1, "altura": 183, edad: 39 },
                    { _id: new ObjectID(), nombre: "Chiellini", pos: 14, "altura": 200, edad: 22 },
                    { _id: new ObjectID(), nombre: "Gerard Piqué", pos: 26, "altura": 172, edad: 23 },
                    { _id: new ObjectID(), nombre: "Dybala", pos: 38, "altura": 182, edad: 35 },
                    { _id: new ObjectID(), nombre: "Dries Mertens", pos: 50, "altura": 168, edad: 27 },
                    { _id: new ObjectID(), nombre: "Firmino", pos: 62, "altura": 169, edad: 41 },
                    { _id: new ObjectID(), nombre: "Marcelo", pos: 74, "altura": 171, edad: 22 }

                ]
            }
        ]
    },{
        nombre_eq: "PSG",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Neymar Jr", pos: 3, "altura": 189, edad: 19 },
                    { _id: new ObjectID(), nombre: "Lewandowski", pos: 15, "altura": 200, edad: 41 },
                    { _id: new ObjectID(), nombre: "Neuer", pos: 27, "altura": 190, edad: 40 },
                    { _id: new ObjectID(), nombre: "Courtois", pos: 39, "altura": 189, edad: 33 },
                    { _id: new ObjectID(), nombre: "Thiago Silva", pos: 51, "altura": 191, edad: 36 },
                    { _id: new ObjectID(), nombre: "Marco Verratti", pos: 63, "altura": 196, edad: 20 },
                    { _id: new ObjectID(), nombre: "Gianluigi Donnarumma", pos: 75, "altura": 186, edad: 20 }

                ]
            }
        ]
    },{
        nombre_eq: "Real Madrid",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Hazard", pos: 1, "altura": 200, edad: 40 },
                    { _id: new ObjectID(), nombre: "Kane", pos: 16, "altura": 182, edad: 27 },
                    { _id: new ObjectID(), nombre: "Mané", pos: 28, "altura": 186, edad: 25 },
                    { _id: new ObjectID(), nombre: "Samir Handanovič", pos: 40, "altura": 186, edad: 25 },
                    { _id: new ObjectID(), nombre: "Casemiro", pos: 52, "altura": 171, edad: 18 },
                    { _id: new ObjectID(), nombre: "Leonardo Bonucci", pos: 64, "altura": 180, edad: 27 },
                    { _id: new ObjectID(), nombre: "James Rodríguez", pos: 76, "altura": 196, edad: 31 }

                ]
            }
        ]
    }, {
        nombre_eq: "Tottenham",
        plantilla: [
            {
                edicion_torneo: "2020",
                _id: new ObjectID(),
                jugadores: [
                    { _id: new ObjectID(), nombre: "Modrić", pos: 1, "altura": 286, edad: 37 },
                    { _id: new ObjectID(), nombre: "Sergio Busquets", pos: 21, "altura": 176, edad: 27 },
                    { _id: new ObjectID(), nombre: "Marco Reus", pos: 33, "altura": 194, edad: 39 },
                    { _id: new ObjectID(), nombre: "Heung Min Son", pos: 45, "altura": 176, edad: 39 },
                    { _id: new ObjectID(), nombre: "Leroy Sané", pos: 57, "altura": 193, edad: 40 },
                    { _id: new ObjectID(), nombre: "Coutinho", pos: 69, "altura": 178, edad: 21 },
                    { _id: new ObjectID(), nombre: "De Ligt", pos: 81, "altura": 170, edad: 20 }

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

});