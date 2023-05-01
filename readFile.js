const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rsStream = fs.createReadStream("first.txt");
  rsStream.on("data", (chunkdata) => {
    res.end(chunkdata);
    console.log("Displaying data");
  });
  rsStream.on("error", (error) => {
    console.log(error);
    res.end("File not found");
  });
});

server.listen(5000, () => {
  console.log("server listening on port 5k g!");
});
