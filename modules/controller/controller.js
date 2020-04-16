const helper = require("../helper/helper");
const service = require("../service/service");
const fs = require("fs");

const upload = async (file) => {
  const encodedFile = await helper.encoder(file);

  const schema = {
    encodedFile: encodedFile,
    fileName: file,
  };

  const result = await service.insertFile(schema);
  fs.unlinkSync(`public/${file}`);
  return result;
};

const download = async (id) => {
  try {
    const encoded = await service.getFile(id);
    helper.decoder(encoded.encodedFile, encoded.fileName);
    return encoded.fileName;
  } catch (err) {
    return err;
  }
};

module.exports = {
  upload,
  download,
};
