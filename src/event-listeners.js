

export function addToDoModalListener() {
    const openModal = document.querySelector("#openModalButton")
    const modal = document.querySelector("#modal")
    const closeModalButton = modal.querySelector("#closeModalButton");
    openModalButton.addEventListener("click", (event) => {
        modal.showModal();
    });
    closeModalButton.addEventListener("click", (event) => {
        modal.close();
    });
}

export function addSubmitToDoFormListener(createToDo, saveToDo, toDoArray, loadPage) {
    const addToDoButton = document.querySelector('#addToDoForm-submitButton')
    addToDoButton.addEventListener('click', () => {
        console.log("event ran")
        let toDoTitleInput = document.querySelector("#toDoTitle");
        let toDoProjectInput = document.querySelector("#toDoProject");
        let toDoDescriptionInput = document.querySelector("#toDoDescription") || '';
        let toDoPriorityInput = document.querySelector('input[name="priority"]:checked') || '';
        let toDoDueDateInput = document.querySelector("#toDoDueDate") || '';
        console.log(toDoProjectInput)
        let toDo = createToDo(toDoProjectInput.value, toDoTitleInput.value, toDoDescriptionInput.value, toDoPriorityInput.value, toDoDueDateInput.value);
        saveToDo(toDoArray, toDo)
        const sidebar = document.querySelector("#projectNames")
        sidebar.innerHTML = '';
        const toDoGrid = document.querySelector("#todo-grid")
        toDoGrid.innerHTML = '';
        loadPage()
        modal.close()
        event.preventDefault();
    })
}

export function addProjectModalListener() {
    const openModal = document.querySelector("#openNewProjectModalButton")
    const modal = document.querySelector("#createProjectModal")
    const closeModalButton = modal.querySelector("#closeModalButton");
    openModal.addEventListener("click", (event) => {
        modal.showModal();
    });
    closeModalButton.addEventListener("click", (event) => {
        modal.close();
    });
}

export function addSubmitCreateProjectFormListener(createProject, saveProject, toDoArray, loadPage) {
    const addProjectButton = document.querySelector('#addProject-submitButton')
    addToDoButton.addEventListener('click', () => {
        console.log("project event ran")
        let projectNameInput = document.querySelector("#projectName");
        
        let project = createProject(projectNameInput);
        saveProject(toDoArray, toDo)
        toDoGrid.innerHTML = '';
        loadPage()
        modal.close()
        event.preventDefault();
    })
}