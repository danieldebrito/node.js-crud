var conexion = require("../config/conection");

var element = require("../model/libro");

module.exports = {
  index: function (req, res) {
    element.gets(conexion, function (err, datos) {      
      res.render('libros/index', { title: "Aplicacion", libros:datos });
      // res.json({libros: datos });
    });
  },
  crear: function (req, res) {
    res.render('libros/crear')
  },
  guardar: function (req, res) {
    element.set(conexion, req.body,req.file, function (err) {      
      res.redirect('/libros/');
    });

  }
};
