const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    // for create a folder named new
    if (err) throw err;
    console.log("Directory created!");
  });
}

if (fs.existsSync("./new")) {
  // for delete a folder named new
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory deleted!");
  });
}
