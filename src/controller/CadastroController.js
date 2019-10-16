const user = []
module.exports = {


  async store(req, res) {

    const {id, title} = req.body;

    if(!id) {
      return res.status(400).json({erro: "Falta de informacoes"})
    }

    user.push({id, title})
    return res.status(200).json({user})

  },


  async index(req, res) {

    var index = user.length

    if(index == 0) return res.status(400).json({erro: 'Não ha conteundo para listar'})

  res.status(200).json({user})

  },

  async delete(req, res) {

    const {id} = req.params
    const index = user.indexOf(id)
    console.log(index)
    user.splice(index, 1)    
    return res.status(200).json(user)

  },

  async update(req, res) {

    const {id} = req.params
    const {task} = req.body
    const index = user.indexOf(id)

    return res.status(200).json({user})
   

  }

}