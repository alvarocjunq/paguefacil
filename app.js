var app = require('./custom-express')();

app.listen(3001, '0.0.0.0', function() {
    console.log('Node server listening on port ', 3001);
});
