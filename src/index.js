import './styles.css';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = 'supo';
   element.classList.add('t')

   return element;
 }

 document.body.appendChild(component());


function createProject(projectName) {
    let getProjectName = () => projectName;

    return {getProjectName}
}

 function createToDo (projectName, title, description, priority, dueDate) {
    const {getProjectName} = createProject(projectName);

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
    return {title, description, priority, dueDate, getProjectName, editMessage, editTitle, editPriority, editDueDate}
 }

