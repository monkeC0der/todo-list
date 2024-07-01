

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
        let toDoDescriptionInput = document.querySelector("#toDoDescription") || '';
        let toDoPriorityInput = document.querySelector('input[name="priority"]:checked') || '';
        let toDoDueDateInput = document.querySelector("#toDoDueDate") || '';
        
        let toDo = createToDo('todays stuff', toDoTitleInput.value, toDoDescriptionInput.value, toDoPriorityInput.value, toDoDueDateInput.value);
        saveToDo(toDoArray, toDo)
        toDoGrid.innerHTML = '';
        loadPage()
        modal.close()
        event.preventDefault();
    })
}