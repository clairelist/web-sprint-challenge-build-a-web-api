// Write your "actions" router here!

//DATA sectionr
const express = require('express');

 const {
    validateActionId,
    validateAction,
} = require('./actions-middlware'); //MIDDLEWARE IS MISSPELLED ON THE FILE ITSELF FFS

const Actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => { //get all, return an array ! 
    Actions.get(req.params.id)
    .then(actions=>{
      res.status(200).json(actions);
    })
    .catch(err=>{
        res.status(404).json(err);
    })
  });

  router.get('/:id', validateActionId,(req,res)=>{ //get by ID; will require middleware !
      res.json(req.action);
  });

router.post('/',validateAction,(req,res,next)=>{ //POST an action
    Actions.insert(req.body)
       .then((action) => {
        res.json(action);
       })
       .catch(next)
});

router.put('/:id', validateAction, validateActionId, (req, res, next) => { //UPDATE an existing action
    Actions.update(req.params.id, req.body)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(error => {
        next(error)
      });
  });

  router.delete('/:id', validateActionId, (req, res, next) => { //DELETE an existing actionr!
    Actions.remove(req.params.id)
      .then(()=>{
        res.status(200).json({message: 'Autograder times out if no response body !'}) //okay so despite no response body being specified in the readme I added it here because the autotest will squick if no response body is here...
      })
      .catch(next)
  });

  module.exports = router;