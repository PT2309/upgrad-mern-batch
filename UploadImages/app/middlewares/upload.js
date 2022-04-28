const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;

var storage = new GridFsStorage({
  url: "mongodb://localhost:27017/uploaded_files_db",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-rocky-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-rocky-${file.originalname}`
    };
  }
});

var uploadFile = multer({ storage: storage }).single("file");
// We can use async and await fucntions on this upload file
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;