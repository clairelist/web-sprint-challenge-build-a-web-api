// add middlewares here related to projects
const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
    try {
         const project = await Projects.get(req.params.id);
         if (!project) {
             res.status(404).json({message: 'specified project not found !'});
         } else {
           req.project = project; 
           next();
         }
    } catch(err) {
     res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
    }
   }

   function validateProject(req, res, next) { //old promise way !
    if (!req.body.name) {
        res.status(400).json({message: 'missing required fields field'}); //RES NOT REQUEST !
    } else if (!req.body.description){
      res.status(400).json({message: 'missing required fields field'}); //let's make it VERY EXPLICIT
    } else {
        next();
    }
  }

   module.exports = {
       validateProjectId,
       validateProject
   }