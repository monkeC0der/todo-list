import './styles.css';
import saveToDo from './storage';
import {createProject, createToDo} from './to-do-creation';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = 'supo';
   element.classList.add('t')

   return element;
 }

 document.body.appendChild(component());




let toDoArray = [];


let testToDo = createToDo('todays stuff', 'do laundry', 'use good detergent');

saveToDo(toDoArray, testToDo);

console.log(toDoArray)

let testToDo2 = createToDo('todays stuff', 'eat lunch', 'finish the chicken breast in tupperware');

saveToDo(toDoArray, testToDo2);

console.log(toDoArray)