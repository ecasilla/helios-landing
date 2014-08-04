var express = require('express'),
    morgan  = require('morgan'),
    app = express(),
  port = process.env.PORT || 8080;

  app.use(require('compression')());
  app.use(morgan('combined'))
  app.use(express.static(__dirname + '/public'));
  app.disable('x-powered-by');
  app.listen(port, function() {
    console.log('Server listening on localhost:'+port);
});
