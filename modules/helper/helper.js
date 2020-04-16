const fs = require("fs");

const decoder = (encodedFile, fileName) => {
  const decodedFile = Buffer.from(encodedFile, "base64");
  fs.writeFileSync(`public/${fileName}`, decodedFile, (err) => {
    if (err) return err;
  });
};

const encoder = (fileName) => {
  const file = fs.readFileSync(`public/${fileName}`);
  const encodedFile = Buffer.from(file).toString("base64");
  return encodedFile;
};

module.exports = {
  decoder,
  encoder,
};
