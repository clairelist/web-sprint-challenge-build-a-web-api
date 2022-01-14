// Write your "projects" router here!

//DATA SECTIONR

const express = require('express');
const {
    validateProjectId,
} = require('./projects-middleware');
const Projects = require('./projects-model'); 
const router = express.Router();

//LOGIC SECTIONR

router.get('/', (req, res) => { //get all, return an array ! 
    Projects.get(req.params.id)
    .then(projects=>{
      res.status(200).json(projects);
    })
    .catch(err=>{
        res.status(404).json(err);
    })
  });

  //GET BY ID x , POST, PUT, DELETE, GET ACTIONS ON PROJECT

  router.get('/:id',validateProjectId,(req,res)=>{ //GET by id
    res.json(req.project); 
  })

  module.exports = router;