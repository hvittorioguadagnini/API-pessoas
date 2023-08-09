const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.addPersonForm');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');

const getPersons = async () => {
  const response = await fetch('http://localhost:3333/pessoas');
  const person = await response.json();
  return person;
} 

const addPerson = async (event) => {
  event.preventDefault();

  const person = { nome: inputName.value, telefone: inputPhone.value };

  
  await fetch('http://localhost:3333/pessoas', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
  });


  loadPersons();
  inputName.value = '';
  inputPhone.value = '';
}

const deletePerson = async (id) => {
  await fetch(`http://localhost:3333/pessoas/${id}`, {
    method: 'delete',
  });

  loadPersons();
}

const updatePerson = async ({id, nome, telefone}) =>{
  
  await fetch(`http://localhost:3333/pessoas/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({nome, telefone})
  });

  loadPersons();
}

const createElement = (tag, innerText = '' , innerHTML = '') => {
  const element = document.createElement(tag);
  
  if(innerText){
    element.innerText = innerText;
  }
  if(innerHTML){
    element.innerHTML = innerHTML;
  }

  return element;
}

const createRow = (person) => {
  
  const { id, nome, telefone } = person;

  const tr = createElement('tr');
  const tdNome = createElement('td', nome);
  const tdTelefone = createElement('td', telefone);
  const tdActions = createElement('td');

  const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
  const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

  const editFormName = createElement('form');
  const editFormPhone = createElement('form');
  const editInputName = createElement('input');
  const editInputPhone = createElement('input');

  editInputName.value = nome;
  editInputPhone.value = telefone;
  editFormName.appendChild(editInputName);
  editFormPhone.appendChild(editInputPhone);

  editFormName.addEventListener('submit', (event) =>{
    event.preventDefault();
    updatePerson({...person, nome: editInputName.value});
  })
  editFormPhone.addEventListener('submit', (event) =>{
    event.preventDefault();
    updatePerson({...person, telefone: editInputPhone.value});
  })

  editButton.addEventListener('click', () => {
    tdNome.innerText = '';
    tdTelefone.innerText = '';
    tdNome.appendChild(editFormName);
    tdTelefone.appendChild(editFormPhone);
  })


  editButton.classList.add('btn-action');
  deleteButton.classList.add('btn-action');

  deleteButton.addEventListener('click', () => deletePerson(id));

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdNome);
  tr.appendChild(tdTelefone);
  tr.appendChild(tdActions);

  return tr;
}

const loadPersons = async () => {
  const persons = await getPersons();

  tbody.innerHTML = '';

  persons.forEach((person) => {
    const tr = createRow(person);
    tbody.appendChild(tr);
  });
}

addForm.addEventListener('submit', addPerson)

loadPersons();
