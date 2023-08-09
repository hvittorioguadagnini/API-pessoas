function validaString(str) {
  const pilha = [];
  const mapaColchetes = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let char of str) {
      if (mapaColchetes[char]) {
          pilha.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
          if (pilha.length === 0) {
              return false;
          }
          const ultimoColchete = pilha.pop();
          if (mapaColchetes[ultimoColchete] !== char) {
              return false;
          }
      }
  }

  return pilha.length === 0; 
}

console.log(validaString("(){}[]"));      
console.log(validaString("[{()}](){}")); 
console.log(validaString("[]{()"));       
console.log(validaString("[{)]"));
