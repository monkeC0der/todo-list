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