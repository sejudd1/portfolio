var express = require('express'),

app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

// sample api route
app.get('/api/b325241e6545289b/conditions/q/CA/Culver_City.json', function(req, res) {
        // if there is an error retrieving, send the error. 
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(data); // return data in JSON format

});