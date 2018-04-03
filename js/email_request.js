// var http = require('http');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Hello Http');
// });
// server.listen(8080);

/* TODO: 
   1. Get your email data from main.js.
   2. Generate dummy email with your own email address via nodemailer to test
   3. Generate email to helpdesk@sdsc.edu [somehow - may need login info]
*/


// Load the http module to create an http server.
var http = require('http'); 

// Create a function to handle every HTTP request
function handler(req, res){

  var form = '';

  if(req.method == "GET"){ 
    
    form = '<!doctype html> \
<html lang="en"> \
<head> \
    <meta charset="UTF-8">  \
    <title>Form Calculator Add Example</title> \
</head> \
<body> \
  <form name="myForm" action="/" method="post">\
      <input type="text" name="A"> + \
      <input type="text" name="B"> = \
      <span id="result"></span> \
      <br> \
      <input type="submit" value="Submit"> \
  </form> \
</body> \
</html>';

  //respond
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(form);
  
  } else if(req.method == 'POST'){

    //read form data
    req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();

      //grab A and B values
      var a = eval(formdata.split("&")[0]);
      var b = eval(formdata.split("&")[1])

      var result = calc(a,b);

      //console.log(chunk.toString());
      //console.log(a);
      //console.log(b);
      //console.log(result);

      //fill in the result and form values
    form = '<!doctype html> \
<html lang="en"> \
<head> \
    <meta charset="UTF-8">  \
    <title>Form Calculator Add Example</title> \
</head> \
<body> \
  <form name="myForm" action="/" method="post">\
      <input type="text" name="A" value="'+a+'"> + \
      <input type="text" name="B" value="'+b+'"> = \
      <span id="result">'+result+'</span> \
      <br> \
      <input type="submit" value="Submit"> \
  </form> \
</body> \
</html>';

    //respond
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(form);

    });

  } else {
    res.writeHead(200);
    res.end();
  };

};

//js functions running only in Node.JS
function calc(a,b){
  return  Number(a)+Number(b);;
}

// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(8000, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://127.0.0.1:8000/ or http://localhost:8000/");
  };
});


// 'use strict';
// const nodemailer = require('nodemailer');

// // Generate test SMTP service account from ethereal.email
// // Only needed if you don't have a real mail account for testing
// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: account.user, // generated ethereal user
//             pass: account.pass // generated ethereal password
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: 'tjluong@gmail.com.com', // list of receivers
//         subject: 'Hello ✔', // Subject line
//         text: 'Hello world?', // plain text body
//         html: '<b>Hello world?</b>' // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     });
// });