const express = require("express");
const exphbs = require("express-handlebars");

const app = express();


app.engine('.hbs', exphbs({
    extname: '.hbs', // set file extension
    defaultLayout: 'main', //set default template
}));

app.set('view engine', '.hbs');

app.use(express.static('public'));

app.get('/', function (req, res){
    res.render('landing');
});

app.get('/topics', function (req, res){
    res.render('topics');
});

app.get('/user/profile', function (req, res){
    res.render('user-profile.hbs');
});


let port = 3000;
app.listen(port, () => {
    console.log("Example app listening on port 3000");
});