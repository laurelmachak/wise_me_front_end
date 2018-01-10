const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs', // set file extension
    defaultLayout: 'main', //set default template
}));

app.set('view engine', '.hbs');


app.get('/', function (req, res){
    res.render('landing');
});

let port = 3000;
app.listen(port, () => {
    console.log("Example app listening on port 3000");
});