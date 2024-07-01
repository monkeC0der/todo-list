export function createProject(projectName) {
    let getProjectName = () => projectName;

    return {getProjectName}
}

export function createToDo (projectName, title, description, priority, dueDate, completed) {
    const {getProjectName} = createProject(projectName);
    let id = 0;

    function editMessage(value) {
      this.description = value;
    }

    function editTitle(value) {
      this.title = value;
    }

    function editPriority(value) {
      this.priority = value;
    }

    function editDueDate(value) {
      this.dueDate = value;
    }

    function editCompleted(value) {
      this.completed = value;
    }

    return {title, description, priority, dueDate, completed, getProjectName, editMessage, editTitle, editPriority, editDueDate, editCompleted}
 }
