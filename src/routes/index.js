const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Projeto Final {Reprograma} - API de Fundos Imobiliários - FIIs"
  })
})

module.exports = router
