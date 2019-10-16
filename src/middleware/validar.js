module.exports = {

  async validar(req, res, next) {



    if(!req.params.id) return res.status(400).json({erro: "Falta de iformacao"})

    console.log('middleware')

    return next()
  }


}