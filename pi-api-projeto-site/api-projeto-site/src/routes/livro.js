var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.get("/listar/:idUsuario", function(req, res) {
    livroController.listar(req, res);
});

router.post("/cadastrar", function(req, res) {
    livroController.cadastrar(req, res);
})
  
module.exports = router;