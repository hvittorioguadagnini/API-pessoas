const validaBody = (request, response, next) => {
  const { body } = request;

  if(body.nome == undefined){
    return response.status(400).json({message: 'É necessário o campo "nome"'})
  }
  if(body.nome == ''){
    return response.status(400).json({message: 'O campo "nome" não pode ser vazio'})
  }
  if(body.telefone == undefined){
    return response.status(400).json({message: 'É necessário o campo "telefone"'})
  }
  if(body.telefone == ''){
    return response.status(400).json({message: 'O campo "telefone" não pode ser vazio'})
  }

  next();
}

module.exports = {
  validaBody,
}