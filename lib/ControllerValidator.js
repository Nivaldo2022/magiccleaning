const pool = require('../database/db');
const { validationResult, matchedData } = require('express-validator');
module.exports = {
    userForm:function(req, res) {
        res.render('index');
    },
    validateForm: async function(req,res){
        try{
        const errors= validationResult(req);
        if(!errors.isEmpty()){

            //mapeed is map is how arrays 
          var errMsg = errors.mapped();
          //matchedData get all data of input
          var inputData = matchedData(req);
          console.log(inputData);

        res.render('contacto', {errors:errMsg, inputData:inputData});      
         }else{
            var inputData = matchedData(req);  
           // insert query will be written here
           const {name, email,  zip, message} = req.body;
    
           const userBody = {
               name,
               email,
               zip,
               message
           }       
              // insert query will be written here          
              const userDB = await pool.query('INSERT INTO users set ?', [userBody]);
            
              if (userDB) {
                  res.status(200)
                  console.log(userBody);
              }

            res.render('index', {errors:errMsg, inputData:inputData});
            

            }
        }catch(errMsg){
                console.log(`Error ${errMsg}`);

        }
    }
}