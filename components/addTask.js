import {checkComplete} from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import {reeadTask} from './reeadTask.js';

export const addTaks = (evento) =>{
  evento.preventDefault();
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const date = document.querySelector('[data-form-date]');
  const value = input.value;
  input.value = '';
  const valueDate = date.value;
  const dateFormat = moment(valueDate).format('DD/MM/YYYY');

  if(value == '' || valueDate == ''){
    return;
  }

  input.value = '';
  date.value = '';
  
  const complete = false;

  //LOCALSTORAGE//
  const taksObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  }

  list.innerHTML = '';

  const localTask = JSON.parse(localStorage.getItem('task')) || [];
  localTask.push(taksObj); 
  localStorage.setItem('task', JSON.stringify(localTask));


  reeadTask();
  };
  

  
  //EMPIEZA FUNCION CREAR TAREA//
export const createTask = ({value, dateFormat, complete, id}) => {
  const task = document.createElement('li');
  task.classList.add('card');

  const check = checkComplete(id);
  if(complete){
  check.classList.toggle('fas');
  check.classList.toggle('completeIcon');
  check.classList.toggle('far');
  }


  //CREANDO TAREA Y CONTENEDOR DE TAREA//
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);
  //TERMINA ESPACIO CREANDO COMNTENEDOR Y ASIGNANDO VALOR DE TAREA //
  

  

  //CREANDO CONTENEDOR DE FECHA//
  const newElement = document.createElement('span');
  newElement.innerHTML = dateFormat;
  taskContent.appendChild(newElement);
  //FINALIZA CONTENEDOR DE FECHA//


  //FUNCION E ICONO DE ELIMINAR TAREA//
  task.appendChild(taskContent);
  task.appendChild(newElement);
  task.appendChild(deleteIcon(id));
  //AQUI TERMINA LA FUNCION DE ICONO DELETE TASK//
  return task;
  };