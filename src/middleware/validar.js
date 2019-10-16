const user = require('../controller/CadastroController')

var count = 0;
module.exports = {

  async validar(req, res, next) {

  const id = req.params.id

  const itemListUser = user.retornaLengList()

  if(id > itemListUser-1){
   return res.status(400).json({erro:' Id nao faz parte da lista de intens'})
  }

  return next();

},

async log(req, res, next) {
  count ++
  console.log(count)
  return next()

}


}