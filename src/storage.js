export default function saveToDo(toDoArray, toDo) {
    const projectName = toDo.projectName;
    const projectIndex = toDoArray.findIndex(item => item.projectName === projectName);
    if (projectIndex === -1) {
        console.log('no project with that name, made a new one')
        const newProject = { projectName: projectName, toDoArray: [] };
        newProject.toDoArray.push(toDo);
        toDoArray.push(newProject);
    }
    else {
        console.log('project exists, adding it to array')
        toDoArray[projectIndex].toDoArray.push(toDo)
    }
    console.log(projectIndex);
    console.log('To Do array below')
    console.table(toDoArray);
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
}