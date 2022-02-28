const fileSystem = require("fs");
const path = require("path");

const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "info.txt"),
      "utf-8"
    );
    // console.log(data);

    // await fsPromises.unlink(path.join(__dirname, "files", "random.txt"));
    // console.log("random.txt deleted!");

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    console.log("promiseWrite.txt has been created!");

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nHello from the append function."
    );
    console.log("Something has been added to promiseWrite.txt!");

    await fsPromises.readFile(
      path.join(__dirname, "files", "promiseWrite.txt")
    );
    console.log("promiseWrite.txt is being read now!");

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseWriteUpdated.txt")
    );
    console.log("promiseWrite updated to promiseWriteUpdated!");

    const newData = fsPromises.readFile(
      path.join(__dirname, "files", "promiseWriteUpdated.txt"),
      "utf-8"
    );
    console.log("promiseWriteUpdated.txt is being read now!");

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWriteUpdated.txt"),
      newData
    );
  } catch (error) {}
};
fileOps();

// fileSystem.readFile("./files/info.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString());
// });

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });

// hedef gösterilen yerde bulunan dosyadaki değeri buradan yolladığımızla günceller, append gibi sonuna ekleme yapmaz.
// fileSystem.writeFile(
//   path.join(__dirname, "files", "writeFile.txt"),
//   "writeFile values updated!",
//   (err) => {
//     if (err) throw err;
//     console.log("Write completed.");
//     fileSystem.appendFile(
//       path.join(__dirname, "files", "writeFile.txt"),
//       "\n\nappendFile in writeFile!",
//       (err) => {
//         if (err) throw err;
//         console.log("appendFile in writeFile completed.");
//         fileSystem.renameFile(
//           path.join(__dirname, "files", "newWriteFile.txt")
//         );
//       }
//     );
//   }
// );

// hedef verilen yerde bulunan dosyaya buradan yollanan değeri gönderir, her gönderimde bir öncekinin sonuna ekler.
// fileSystem.appendFile(
//   path.join(__dirname, "files", "appendFile.txt"),
//   "appendFile values here!",
//   (err) => {
//     if (err) throw err;
//     console.log("Append completed.");
//   }
// );
