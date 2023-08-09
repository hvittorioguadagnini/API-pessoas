const pessoasModel = require('../models/pessoasModel')

const getAll = async (request, response) =>{
  const pessoas = await pessoasModel.getAll();

  return response.status(200).json(pessoas);
}

const criaPessoa = async (request, response) =>{

  const pessoaCriada = await pessoasModel.criaPessoa(request.body);

  return response.status(201).json(pessoaCriada);
}

const deletaPessoa = async (request, response) => {
  const { id } = request.params;

  await pessoasModel.deletaPessoa(id);
  return response.status(204).json();
}

const atualizaPessoa = async (request, response) => {
  const { id } = request.params;

  await pessoasModel.atualizaPessoa(id, request.body);
  return response.status(204).json();
}

module.exports = {
  getAll,
  criaPessoa,
  deletaPessoa,
  atualizaPessoa,
}