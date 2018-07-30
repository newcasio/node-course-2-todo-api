var{ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose.js');
var{Todo} = require('./../server/models/todo.js');
var {User} = require('./../server/models/user.js');

var id  = '6b59b3dcd04ab6042e50df4a';  //user id

User.findById(id).then((user)=>{
  if (!user) {
    return console.log('User not found.')
  };
  console.log('User found', user);
}).catch((e)=>console.log(e));

// var id = "5b5e4cd63c656c0374c57fe3";  //todo id
//
// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos by find', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo by findOne', todo);
// });


// Todo.findById(id).then((todo)=>{
//   if (!todo){
//     return console.log("Id not found");
//   };
//   console.log('Todo by findByID', todo);
// }).catch((e)=>console.log(e));
