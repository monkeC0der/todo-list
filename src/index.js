import './styles.css';
import saveToDo from './storage';
import {createProject, createToDo} from './to-do-creation';
import { addToDosToPage } from './dom';
import { addToDoModalListener, addSubmitToDoFormListener } from './event-listeners';

let toDoArray = [];
function loadPage() {
    
    if (localStorage.getItem("toDoArray")) {
        toDoArray = JSON.parse(localStorage.getItem("toDoArray"))
        addToDosToPage(toDoArray)
    }
    addToDoModalListener()
    addSubmitToDoFormListener(createToDo, saveToDo, toDoArray, loadPage)
    toDoArray.forEach((item, i) => {
        item.id = i + 1;
      });
    console.table(toDoArray)
    return toDoArray;
}




loadPage()

// let testToDo = createToDo('todays stuff', 'do laundry', 'use good detergent');

// saveToDo(toDoArray, testToDo);

// console.log(toDoArray) 

// let testToDo2 = createToDo('todays stuff', 'eat lunch', 'finish the chicken breast in tupperware');

// saveToDo(toDoArray, testToDo2);

// console.log(toDoArray)

// let testToDo3 = createToDo('todays stuff', 'pack for town', 'finish the chicken breast in tupperware');

// saveToDo(toDoArray, testToDo3);

// let testToDo4 = createToDo('tomorrow\'s stuff', 'go for a run', '5 miles');
// saveToDo(toDoArray, testToDo4);

// let testToDo5 = createToDo('tomorrow\'s stuff', 'buy groceries', 'milk, eggs, bread');
// saveToDo(toDoArray, testToDo5);

// let testToDo6 = createToDo('tomorrow\'s stuff', 'read a book', 'The Great Gatsby');
// saveToDo(toDoArray, testToDo6);

// let testToDo7 = createToDo('tomorrow\'s stuff', 'call mom', 'wish her happy birthday');
// saveToDo(toDoArray, testToDo7);

// let testToDo8 = createToDo('tomorrow\'s stuff', 'clean the house', 'vacuum, dust, mop');
// saveToDo(toDoArray, testToDo8);




//currently working on adding todo's to dom