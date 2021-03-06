var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var {ObjectId}  = require('mongodb');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
var port = process.env.PORT||3000;


app.use(bodyParser.json());

app.post('/todos', (req,res) =>{
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});



app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e)=>{
    res.status(400).send(e);
  });
});


app.get('/todos/:blue', (req,res)=>{
  var ident  = req.params.blue;

  if (!ObjectId.isValid(ident)) {
    return res.status(404).send('Not valid id');
  };

  Todo.findById(ident).then((todo)=>{
    if (!todo){
      res.status(404).send('Id not found');
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send('failed');
  });
});


app.delete('/todos/:pink', (req,res)=>{
  var IDent = req.params.pink;

  if(!ObjectId.isValid(IDent)){
    res.status(404).send('ID not valid');
  };

  Todo.findByIdAndRemove(IDent).then((result)=>{
    if (!result){
      res.status(404).send('Good id but not found');
    }
    res.send({result});
  }).catch((e)=>{
    res.status(400).send('Some wrong code here')
  });
});


app.patch('/todos/:id', (req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectId.isValid(id)){
    res.status(404).send('ID not valid');
  };

  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt=null;
  }

  Todo.findByIdAndUpdate(id, {$set:body}, {new: true}).then((todo) =>{
    if(!todo){
      return res.status(404).send('no id found to update');
    }

    res.send({todo});
  }).catch((e)=>{
    res.status(400).send('some wrong code here')
  })
});

app.listen(port, () =>{
  console.log(`Started on port ${port}`);
});

module.exports = {
  app
};
