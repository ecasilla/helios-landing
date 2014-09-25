var express = require('express'),
    morgan  = require('morgan'),
    app = express(),
    bodyParser = require('body-parser'),
    contact,
    port = process.env.PORT || 8080;

  app.use(require('compression')());
  app.use(morgan('tiny'))
  app.use(express.static(__dirname + '/public'));
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/',function(req,res){
  // var name = req.body.name,
  //     email = req.body.email,
  //     message = req.body.message;
  //     contact = {
  //       name: name,
  //       email: email,
  //       message: message
  //     }
      console.log(req.body);
  });
  app.listen(port, function() {
    console.log('Server listening on localhost:'+port);
});
