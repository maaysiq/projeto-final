
const express = require("express");
const router = express.Router();
const controller = require("../controllers/fundosImobiliariosController");

router.get("/", controller.getAllFundosImobiliarios);
router.get("/:id", controller.getById);
router.get("/segmento/:segmento",controller.getPorSegmento);
router.get("/fundo/:fundo",controller.getPorFundo)
router.post("/", controller.createFundosImobiliarios);
router.put("/", controller.updateFundosImobiliariosPorFundo);
router.delete("/", controller.deleteFundosImobiliariosPorFundo);
module.exports = router;