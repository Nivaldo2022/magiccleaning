const config = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');


const port = config.PORT;
const app = express();

app.use(morgan('tiny'));

//middleware config
app.use(helmet.hsts());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hidePoweredBy());



app.use(compression()); 
//template engine
app.set('view engine', "ejs");

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended:false}));   
//public file
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname,'public/css')));
app.use('/img',express.static(path.join(__dirname, 'public/img')));

//router
app.use(require('./router/router.js'))

//method post
app.post('/message', require('./router/router'));

//middleware
app.use((req, res, next) => {
     res.sendStatus(404);
});  

  
//server running
app.listen(port, (req,res)  => {
    console.log(`Running is port: ${port}`);
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});

