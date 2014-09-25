var express = require('express'),
morgan  = require('morgan'),
nodemailer = require('nodemailer'),
bodyParser = require('body-parser'),
app = express(),
port = process.env.PORT || 8080;

app.use(require('compression')());
app.use(morgan('tiny'))
app.use(express.static(__dirname + '/public'));
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/',function(req,res,next){
  var contact, smtpTrans, name, email,message;

  name = req.body.name
  email = req.body.email
  message = req.body.message

console.log(name + ' ' + email + ' ' + message);


  smtpTrans = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: "ecasilla01@gmail.com",
      pass: "rugged21"
    }
  });

  contact = {
    from: name + ' &lt;' + email + '&gt;',
    to: 'ecasilla01@gmail.com',
    subject: 'Helios contact form' + ' ' + name,
    text: message
  };

  smtpTrans.sendMail(contact, function (error, response) {
    if (error) {
       console.log('Error occured');
       console.log(error.message);
    }
    else {
      console.log('Success');
    }
     smtpTransport.close();
  });
});


  app.listen(port, function() {
    console.log('Server listening on localhost: '+ port);
  });
