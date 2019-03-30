var express = require('./express');

module.exports.start = function() {
  var app = express.init();
 
  
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8080;
  }
  
      app.listen(port, function() {
          console.log('listening on port 8080 (if not being hosted)');
      });
  };