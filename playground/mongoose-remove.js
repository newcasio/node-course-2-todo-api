var{ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose.js');
var{Todo} = require('./../server/models/todo.js');
var {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });




// Todo.findByIdAndRemove('5b5feaa6355b680bd85d21ae').then((result)=>{
//   console.log(result);
// });

  Todo.findOneAndRemove({"text":"New todo right here"}).then((result)=>{
  console.log(result);
});
