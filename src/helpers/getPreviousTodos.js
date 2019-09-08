export default function getPreviousTodos() {

    let previousTodos = localStorage.getItem('todoList');

    if (previousTodos === null || previousTodos === "undefined") {
        return {
            todos: []
        };
    } 


    return JSON.parse(previousTodos);

}