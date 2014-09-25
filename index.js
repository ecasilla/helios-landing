var express = require('express'),
morgan  = require('morgan'),
nodemailer = require('nodemailer'),
bodyParser = require('body-parser'),
dotenv = require('dotenv'),
app = express(),
dotenv.load();
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


  smtpTrans = nodemailer.createTransport({
    debug:true,
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  contact = {
    from: process.env.GMAIL_USERNAME,
    to:   process.env.GMAIL_USERNAME,
    subject: 'New Helios Contact' + ' ' + name + ' '+ email,
    text: 'Email: ' +  email + '\n ' + message
  };

  smtpTrans.sendMail(contact, function (error, response) {
    if (error) {
       console.log('Error occured');
       console.log(error.message);
       console.log(error);
       return;
    }
    else {
      console.log('Success');
    }
     smtpTrans.close();
  });
  res.redirect('/').end();
});


  app.listen(port, function() {
    console.log('Server listening on localhost: '+ port);
  });
