// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connection made to MongoDB server.');

  var db = client.db('TodoApp');


  // db.collection('Todo').findOneAndUpdate({
  //   _id: new ObjectID("5b580645537a761f3f3bbd75")
  // },{
  //   $set :{completed: true}
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

    db.collection('Users').findOneAndUpdate({
      name: 'Brad'
    },{
      $inc :{age:1},
      $set : {name: 'Bradley'}
    },{
      returnOriginal: false
    }).then((result)=>{
      console.log(result);
    });

  client.close;
});
