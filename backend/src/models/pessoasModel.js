const connection = require('./connection')

const getAll = async () =>{
  const pessoas = await connection.execute('SELECT * FROM pessoas');
  return pessoas[0];
}

const criaPessoa = async (pessoa) =>{
  const { nome, telefone } = pessoa

  const pessoaCriada = await connection.execute('INSERT INTO pessoas(nome, telefone) VALUES(?, ?)', [nome, telefone])

  return {insertId: pessoaCriada[0].insertId};
}

const deletaPessoa = async (id) => {
  const pessoaRemovida = await connection.execute('DELETE FROM pessoas WHERE id = ?', [id])
  return pessoaRemovida;
}

const atualizaPessoa = async (id , pessoa) => {
  const { nome, telefone } = pessoa;

  const pessoaRemovida = await connection.execute('UPDATE pessoas SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id])
  return pessoaRemovida;
}

module.exports = {
  getAll,
  criaPessoa,
  deletaPessoa,
  atualizaPessoa,
}