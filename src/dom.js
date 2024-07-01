export function addToDosToPage(toDos) {
    const toDoGrid = document.querySelector('#todo-grid');
    toDos.map((toDo) => {
        let gridItem = addToDoCard(toDo, toDos);
        toDoGrid.appendChild(gridItem);
    });
}

export function addToDoCard(toDo, toDoArray) {

    let gridItem = document.createElement('details');
    let toDoTitle = document.createElement('summary');
    let toDoDescription = document.createElement('p');
    let toDoPriority = document.createElement('p');
    let toDoDueDate = document.createElement('p');

    toDoTitle.textContent = toDo.title;
    toDoDescription.textContent = toDo.description ? toDo.description : 'No Description';
    toDoPriority.textContent = toDo.priority ? toDo.priority : 'No Priority';
    toDoDueDate.textContent = toDo.dueDate ? toDo.dueDate : 'No Due Date';

    gridItem.id = 'todo-card';
    toDoTitle.id = 'todo-card-title';
    toDoDescription.id = 'todo-card-description';
    toDoPriority.id = 'todo-card-priority';
    toDoDueDate.id = 'todo-card-duedate';

    gridItem.appendChild(toDoTitle);
    gridItem.appendChild(toDoDescription);
    gridItem.appendChild(toDoPriority);
    gridItem.appendChild(toDoDueDate);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        gridItem.remove();
        // Remove the todo from the toDoArray
        const index = toDoArray.findIndex(item => item.id === toDo.id);
        if (index !== -1) {
            toDoArray.splice(index, 1);
        }
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray))
        console.table(toDoArray)
    });

    toDoTitle.appendChild(deleteButton);

    return gridItem;
}
