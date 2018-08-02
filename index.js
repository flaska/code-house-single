const express = require('express'),
    compression = require('compression'),
    mail = require('./server/mail'),
    bodyParser = require('body-parser')
    app = express();

function genericResponseFactory(req, res){
    return function genericResponse(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        if (result===null) return res.status(400).send("No result returned.");
        res.send(result);
    }
};


app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/email/submit', function(req, res){
    mail.forwardMessage(req.body, genericResponseFactory(req, res));
});

app.use(express.static('public'));

var appPort = process.env.PORT || 3003;

app.listen(appPort, () => console.log('Example app listening on port ' + appPort));