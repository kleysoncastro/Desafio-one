const user = []
module.exports = {


   retornaLengList() {
     var index = user.length
    return index
  },


  async store(req, res) {

    const {id, title} = req.body;

    if(!id) {
      return res.status(400).json({erro: "Falta de informacoes"})
    }

    user.push({id, title})
    return res.status(200).json({user})

  },


  async index(req, res) {


    if(user.length == 0) return res.status(400).json({erro: 'Não ha conteundo para listar'})

  res.status(200).json({user})

  },

  async delete(req, res) {

    const {id} = req.params

    if(user.length == 0) {
      return res.status(200).json({mgs: 'nao a intens para serem removidos'})
    }

    user.splice(id, 1) 
    return res.status(200).json(user)

  },
  async update(req, res) {
    const {task} = req.body

    var index = user.length

    if(index == 0) {
      return res.status(200).json({mgs: 'nao a intens para serem atualizados'})
    }

    user.map((elem, index)=> {

      const {id, title} = user[req.params.id]

      if(id == index) {
        user[index] = {id, title, task}
      }

    })

    return res.status(200).json(user)
  }

}