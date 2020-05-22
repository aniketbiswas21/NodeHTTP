const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
