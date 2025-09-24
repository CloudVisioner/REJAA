const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Marcus:WA7z036Ni0bU5Gzt@reja.vubcwe7.mongodb.net/boss";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
module.exports = { db: () => db };

