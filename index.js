const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');
const app = express();

// Setting up the instance of handlebars
const hb_inst = handlebars.create({
    extname: '.handlebars',
    compilerOptions: { preventIndent: true },
    layoutsDir: path.join(__dirname, 'views','layouts') ,
    partialsDir: path.join(__dirname, 'views','partials'),
});

// Connecting it to the app
app.engine('handlebars', hb_inst.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views','pages'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public/images'));
// app.use(express.static('public/style/css'));
app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/style'));
app.use(express.static('public/style/css'));
app.use(express.static('public/style/fonts'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(require('./router'));

//Catching all non-existent pages
app.use((req,res) => {
    res.render('404', {
        alert : { 
            type: 'warning',
            title: '404 page not found',
            message: 'Someone must have ate this page...'
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    
console.log('app is listening on enviorment variable of port');
});