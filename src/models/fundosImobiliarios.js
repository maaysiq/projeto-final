const mongoose = require('mongoose');

const fundosImobiliariosSchema = new mongoose.Schema({
 id : { type: Number },
 fundo: { type: String },
 segmento: { type: String },
 quantidadeDeAtivo: { type: Number },
 valorMinimo: { type: String },
 dividendYield: { type: String},
 liquidez: { type: String },
},{
    versionKey: false
});

const fundosImobiliarios = mongoose.model('fundosImobiliarios', fundosImobiliariosSchema);

module.exports = fundosImobiliarios