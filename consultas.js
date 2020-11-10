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

  db.collection("partidos").find({}, function (err, cursor) {

    cursor.toArray(function (err, docs) {
      console.log(docs[0].id_torneo);
        
      var ObjectId = require('mongodb').ObjectID;

/*         db.collection("torneo").find({"_id": ObjectId(docs[0].id_torneo)}).toArray(function(err, result) {
          if (err) throw err;
          console.log("--------------------------------------------")
          console.log(JSON.stringify(result, undefined, 4));
          console.log("--------------------------------------------")
          client.close();
        });  */

        
      db.collection("partidos").aggregate([
        {'$match' : {"otro": "nadie"}}, 
        {'$lookup': {
          'from': "torneo",
          'localField': "_id",
          'foreignField': "fk",
          'as': "alias"
          }} 
        ]
        , function(err, res){
            res.toArray(function(err, doc){
                console.log( doc)
            })
        client.close();
      });
    });
});

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

});