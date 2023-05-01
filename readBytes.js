const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rsStream = fs.createReadStream("first.txt");
  rsStream.on("readable", () => {
    let chunck;
    while (null !== (chunck = rsStream.read())) {
      res.end(`This file read ${chunck.length} bytes of data`);
    }
  });
  rsStream.on("error", (error) => {
    console.log(error);
    res.end("File not found");
  });
});

server.listen(5000, () => {
  console.log("server listening on port 5k g!");
});
