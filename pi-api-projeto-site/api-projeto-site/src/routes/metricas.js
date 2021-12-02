var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/totalLivrosUnicos", function(req, res) {
    metricasController.totalLivrosUnicos(req, res);
});

router.get("/mediaAvaliacao", function(req, res) {
    metricasController.mediaAvaliacao(req, res);
})

router.get("/generoMaisLido", function(req, res) {
    metricasController.generoMaisLido(req, res);
});
  
module.exports = router;