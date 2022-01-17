var express = require("express");
var router = express.Router();
const librosController = require("../controllers/librosController");

var multer = require("multer");
var fecha = Date.now();

// saco el nombre de la folder
var folderPath = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/images/');
  },
  filename: function (req, file, callback) {
    console.log(file);
    callback(null, fecha + "_"+ file.originalname);
  },
});

var cargar = multer({
    storage: folderPath,
});

router.get("/", librosController.index);
router.get("/crear", librosController.crear);
router.post("/", cargar.single("archivo"), librosController.guardar); // 'archivo' es el nombre del form

module.exports = router;
