// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connection made to MongoDB server.');

  var db = client.db('TodoApp');

  // db.collection('Todo').find({completed: false}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

    // db.collection('Todo').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}.`);
    // },(err)=>{
    //   console.log('Unable to count todos', err);
    // });

    // db.collection('Users').find({location:'Sydney'}).toArray().then((docs)=>{
    //   console.log(JSON.stringify(docs, undefined,2));
    // }, (err)=>{
    //   console.log("Unable to process request");
    // });

    db.collection('Users').find({location:'Sydney', name: 'Brad'}).count().then((count)=>{
      console.log(`Number of Brads in Sydney: ${count}.`);
    }, (err)=>{
      console.log("Unable to process request");
    });

  client.close;
});
