export function addToDosToPage(toDos) {
    const toDoGrid = document.querySelector('#todo-grid');
    if (toDos[0]) {
        const pageHeader = document.querySelector("#todo-grid-title")
        pageHeader.textContent = toDos[0].projectName;
        toDos[0].toDoArray.map((toDo) => {
            let gridItem = addToDoCard(toDo, toDos);
            toDoGrid.appendChild(gridItem);
        
        });
    }
    
}

export function addProjectsToPage(toDos) {
    console.log('we goin')
    const sidebar = document.querySelector('#projectNames')
    let projectNames = toDos.map(toDo => toDo.projectName)
    const uniqueProjectNames = [...new Set(projectNames)];
    uniqueProjectNames.map((projectName) => {
        let projectButton = document.createElement('a');
        projectButton.href = '#'
        projectButton.textContent = projectName;
        projectButton.id = 'sidebar-project-button'
        sidebar.appendChild(projectButton);
})
    console.table(uniqueProjectNames);
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
        const index = toDoArray.findIndex(item => item.projectName === toDo.projectName);
        console.log(index)
        const toDoIndex = toDoArray[index].toDoArray.findIndex(item => item.toDoTitle == toDo.toDoTitle)
        console.log('todo index:' + toDoIndex)
        if (toDoIndex !== -1) {
            toDoArray[index].toDoArray.splice(toDoIndex, 1);
        }
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray))
        console.table(toDoArray)
    });

    toDoTitle.appendChild(deleteButton);

    return gridItem;
}
