// Write your "actions" router here!

//DATA sectionr
const express = require('express');

 const {
    validateActionId
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

  module.exports = router;