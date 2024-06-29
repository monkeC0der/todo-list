import './styles.css';
import saveToDo from './storage';
import {createProject, createToDo} from './to-do-creation';

let toDoArray = [];


let testToDo = createToDo('todays stuff', 'do laundry', 'use good detergent');

saveToDo(toDoArray, testToDo);

console.log(toDoArray)

let testToDo2 = createToDo('todays stuff', 'eat lunch', 'finish the chicken breast in tupperware');

saveToDo(toDoArray, testToDo2);

console.log(toDoArray)