var app = require('express')(),
    morgan  = require('morgan'),
  port = process.env.PORT || 8080;

  app.use(require('compression')());
  app.use(morgan('combined'))
  app.use(require('serve-static')('public/'));

  app.listen(port, function() {
    console.log('Server listening on localhost:'+port);
});
