
const express = require("express");
const router = express.Router();
const controller = require("../controllers/fundosImobiliariosController");

router.get("/", controller.getAllFundosImobiliarios);
router.post("/", controller.createFundosImobiliarios);
router.put("/fundo", controller.updateFundosImobiliariosPorFundo);
router.delete("/fundo", controller.deleteFundosImobiliariosPorFundo);
module.exports = router;