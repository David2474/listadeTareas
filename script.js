import { addTaks } from "./components/addTask.js";
import { reeadTask } from "./components/reeadTask.js";


//IMPORTANDO MODULOS DE LAS FUNCIONES//
const btn = document.querySelector('[data-form-btn]');
//BOTON QUE ACCIONA EL EVENTO DE LA FUNCION CREATETASK

  //Arrow functions o funciones anonimas
  btn.addEventListener('click', addTaks);

  reeadTask();