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

 function createToDo (projectName, title, description) {
    const {getProjectName} = createProject(projectName);

    function editMessage(value) {
      this.description = value;
    }

    function editTitle(value) {
      this.title = value;
    }
    return {title, description, getProjectName, editMessage, editTitle}
 }

