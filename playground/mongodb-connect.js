// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connection made to MongoDB server.');

  var db = client.db('TodoApp');
  // db.collection('Todo').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) =>{
  //   if (err){
  //     return console.log('Unable to insert Todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: "Gavin",
    age: 40,
    location: 'Tokyo'
  }, (err, result)=>{
    if (err){
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined,2));
  });

  client.close;
});
