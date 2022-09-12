( () =>{const btn = document.querySelector('[data-form-btn]');


const createTask = (evento) => {

  evento.preventDefault();

  const input = document.querySelector('[data-form-input]');

  const value = input.value;

  const list = document.querySelector('[data-list]')

  const task = document.createElement('li');

  task.classList.add('card');
  
  input.value = '';

  const taskContent = document.createElement('div');

  taskContent.appendChild(checkComplete());

  const taskTitle = document.createElement('span');

  taskTitle.classList.add('task');

  taskTitle.innerText = value;

  taskContent.appendChild(taskTitle); 

  const content = `
<i class="far fa-trash-alt trashIcon icon"></i>
`;

  task.appendChild(taskContent);

  list.appendChild(task);

};

btn.addEventListener('click', createTask);

const checkComplete = () =>{

  const i = document.createElement('i');

  i.classList.add('far','fa-check-square','icon')

  i.addEventListener('click', completeTask);

  return i;

}

const completeTask = (event) => {

  const element = event.target;

  element.classList.toggle('far');
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon')

}

})();