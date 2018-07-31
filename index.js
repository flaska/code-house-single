const express = require('express'),
    compression = require('compression');
const app = express();

app.use(express.static('public'));

app.use(compression());

var appPort = process.env.PORT || 3003;

app.listen(appPort, () => console.log('Example app listening on port ' + appPort));