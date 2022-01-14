// add middlewares here related to actions
const Actions = require('./actions-model');

async function validateActionId(req, res, next) { //asyncronous bc we are calling database ! -- try/catch way
   try {
        const action = await Actions.get(req.params.id);
        if (!action) {
            res.status(404).json({message: 'action not found !'});
        } else {
          req.action = action; //this is how we store it ! Not the other way round claire ;-)
          next(); //THEN invoke next
        }
   } catch(err) {
    res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
   }
  }

  module.exports = {
      validateActionId
  }