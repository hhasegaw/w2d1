var https = require('https');                               

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    https.get(requestOptions, function (response) {
    var buf = ""; 
        // set encoding of red data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) { 
        buf += data 
          console.log('Chunk Received. Length:', data.length);
        });
   
        response.on('end', function() {
          console.log('Response stream complete.' + buf);
        });
      
      });
  
  }
  getAndPrintHTML();