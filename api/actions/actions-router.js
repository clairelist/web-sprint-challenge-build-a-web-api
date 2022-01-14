// Write your "actions" router here!

//DATA sectionr
const express = require('express');

// const {} = require('./actions-middleware');

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

  module.exports = router;