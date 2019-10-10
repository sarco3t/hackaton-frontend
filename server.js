var express = require("express");
// Create link to Angular build directory
var app = express();
var path = require('path')
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
const port = process.env.PORT || 8080;
// Start the app by listening on the default Heroku port
app.listen(port), () => console.log("Server listening on " + port);
