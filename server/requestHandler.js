var fs = require('fs');
function home(response, postData) {
  console.log("Request handler 'home' was called.");
  fs.readFile('./index.html', function (err,html) {
    if (err) throw err;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  });
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (postData) {
    // response.write(postData);
    response.write("502\nUnkonwn command");
  }
  response.end();
}

exports.home = home;
exports.upload = upload;
