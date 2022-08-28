const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function (request, response) {
  const parsed = "." + request.url;
  switch (parsed) {
    case "./":
      sendFile(response, "home.html");
      break;
    default:
      sendFile(response, parsed);
      break;
  }
  response.write;
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    if (err != null && err.code === "ENOENT") {
      response.end("404: No Page Found");
      return console.error(err);
    }
    response.end(content, "utf-8");
  });
};
