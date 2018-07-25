// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connection made to MongoDB server.');

  var db = client.db('TodoApp');
  //deleteMany
//   db.collection('Todo').deleteMany({text: 'Eat lunch'}).then((result)=>{
//     console.log(result);
//   }
// );

  //deleteOne
  // db.collection('Todo').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todo').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Brad'}).then((result)=>{
  //   console.log(result)
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b57f2d9537a761f3f3bb290")}).then((result)=>{
    console.log(result);
  });

  client.close;
});
