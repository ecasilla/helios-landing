var app = require('express')(),
    morgan  = require('morgan'),
  port = process.env.PORT || 8080;

  app.use(require('compression')());
  app.use(morgan('combined'))
  app.use(express.static(__dirname + '/public'));
  app.disable('x-powered-by');
  app.listen(port, function() {
    console.log('Server listening on localhost:'+port);
});
