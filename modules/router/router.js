const controller = require("../controller/controller");
const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/");
  },
  filename: (req, file, db) => {
    db(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  const result = await controller.upload(req.file.originalname);
  res.send(`_id: ${result}`);
});

router.get("/download/:id", async (req, res) => {
  const result = await controller.download(req.params.id);
  const path = {
    path: `/${result}`,
  };
  res.send(path);
});

module.exports = router;
