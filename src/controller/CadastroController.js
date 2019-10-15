module.exports = {

  async store(req, res) {
    
    const user = []

    const {id, title, task} = req.body;

    if(!id) {
      return res.status(400).json({erro: "Falta de informacoes"})
    }

    user.push({id, title, task})
    res.status(200).json({user})

  }
}