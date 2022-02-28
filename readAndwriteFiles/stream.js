//For larger files, ReadStream and WriteStream is more useful.
const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/new-lorem.txt");

// rs.on("data", (data) => {
//   ws.write(data);
// });

rs.pipe(ws);
