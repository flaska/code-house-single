const express = require('express'),
    compression = require('compression'),
    mail = require('./server/mail')
    app = express();


app.use(compression());

app.post('/email', function(req, res){

});


app.use(express.static('public'));

var appPort = process.env.PORT || 3003;

app.listen(appPort, () => console.log('Example app listening on port ' + appPort));