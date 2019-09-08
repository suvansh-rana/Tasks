export default function getTodos(todos, done = true) {

    return todos.filter(function (taskObj) {

        return done ? taskObj.done : !taskObj.done;
    })

}