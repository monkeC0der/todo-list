export default function saveToDo(toDoArray, toDo) {
    toDoArray.push(toDo);
    localStorage.setItem('toDoArray', toDoArray)
}