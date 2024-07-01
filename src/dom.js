export function addToDosToPage(toDos) {
    const toDoGrid = document.querySelector('#todo-grid');
    toDos.map((toDo) => {
        let gridItem = addToDoCard(toDo);
        toDoGrid.appendChild(gridItem);
    });
}

export function addToDoCard(toDo) {

    let gridItem = document.createElement('div');
    let toDoTitle = document.createElement('h4');
    let toDoDescription = document.createElement('p');
    let toDoPriority = document.createElement('p');
    let toDoDueDate = document.createElement('p');

    toDoTitle.textContent = toDo.title;
    toDoDescription.textContent = toDo.description ? toDo.description : 'No Description';
    toDoPriority.textContent = toDo.priority ? toDo.priority : 'No Priority';
    toDoDueDate.textContent = toDo.dueDate ? toDo.dueDate : 'No Due Date';

    toDoTitle.id = 'todo-card-title';
    toDoDescription.id = 'todo-card-description';
    toDoPriority.id = 'todo-card-priority';
    toDoDueDate.id = 'todo-card-duedate';

    gridItem.appendChild(toDoTitle);
    gridItem.appendChild(toDoDescription);
    gridItem.appendChild(toDoPriority)
    gridItem.appendChild(toDoDueDate)
    
    return gridItem;
}
