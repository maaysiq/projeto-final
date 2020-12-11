const fundosImobiliarios = require('../models/fundosImobiliarios');

const getAllFundosImobiliarios = (req, res) => {
    fundosImobiliarios.find(function(err, fundosImobiliario ) {
        if(err){
            res.status(500).send({message: err.message, 
                message: FAILL});
        }
    res.status(200).send(fundosImobiliario);
});
};
const getById = (req, res) => {
  const id = req.params.id

  fundosImobiliarios.find({ id }, function(err, fundosImobiliario) {
    if(fundosImobiliario.length> 0){

      if(err) {
          res.status(500).send({ message: err.message,
          message: FAILL});
      } 
      res.status(200).send(fundosImobiliario)
    }else {
      res.status(200).send({ message: "Não há Fundos Imobiliarios com esse ID!"})
    }
  });
};
 
const getPorSegmento = (req, res) => {
  const segmento = req.params.segmento

  fundosImobiliarios.find({ segmento }, function(err, fundosImobiliario) {
    if(fundosImobiliario.length> 0){

      if(err) {
          res.status(500).send({ message: err.message,
          message: FAILL});
      } 
      res.status(200).send(fundosImobiliario)
    }else {
      res.status(200).send({ message: "Não há Fundos Imobiliarios com esse Segmento!"})
    }
  });
};
 
const getPorFundo = (req, res) => {
  const fundo = req.params.fundo

  fundosImobiliarios.find({ fundo }, function(err, fundosImobiliario) {
    if(fundosImobiliario.length> 0){

      if(err) {
          res.status(500).send({ message: err.message,
          message: FAILL});
      } 
      res.status(200).send(fundosImobiliario)
    }else {
      res.status(200).send({ message: "Fundo Imobiliario não cadastrado!"})
    }
  });
};
 
const createFundosImobiliarios = (req, res) => {
    console.log(req.body);

    let fundosImobiliario = new fundosImobiliarios(req.body);

    fundosImobiliario.save(function(err) {
        if(err){
            res.status(500).send({ message: err.message, message: FAIL})
      }  res.status(201).send({ message: "Fundo Imobiliário Registrado com Sucesso!"})
    });
};

const updateFundosImobiliariosPorFundo = (req, res) => {
    const fundo = req.query.fundo
  
    fundosImobiliarios.find({fundo: fundo}, function(err, fundosImobiliario){
      if(fundosImobiliario.length> 0){
       
        fundosImobiliarios.updateMany({fundo: fundo}, { $set : req.body }, function (err) {
          if (err) {
            res.status(500).send({ message: err.message })
          }
          res.status(200).send({ message: "Fundo Imobiliario alterado com sucesso!"})
        })
      }else {
        res.status(200).send({ message: "Não há Fundos Imobiliarios para serem atualizados!"})
      };
    });
  
  };
  const deleteFundosImobiliariosPorFundo = (req, res) => {
    const fundo = req.query.fundo
  
    fundosImobiliarios.find({fundo: fundo}, function(err, fundosImobiliario){
      if(fundosImobiliario.length> 0){
       
        fundosImobiliarios.deleteMany({fundo: fundo}, { $set : req.body }, function (err) {
          if (err) {
            res.status(500).send({ message: err.message })
          }
          res.status(200).send({ message: "Fundo Imobiliario excluido com sucesso!"})
        })
      }else {
        res.status(200).send({ message: "Não há Fundos Imobiliarios para serem excluidos!"})
      };
    });
  };


module.exports = {getAllFundosImobiliarios,
    getById,
    getPorSegmento,
    getPorFundo,
    createFundosImobiliarios,
    updateFundosImobiliariosPorFundo,
    deleteFundosImobiliariosPorFundo
};