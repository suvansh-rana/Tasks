import * as actionTypes from '../actions/actionTypes';
import uuidv4 from "uuid/v4";

const todoReducer = (state, action) => {

    let taskObj, taskID, task;
    const todos = [...state.todos];

    switch (action.type) {

        case actionTypes.ADD_TASK:

            task = action.payload;
            const title = task.title;
            const content = task.content;

            todos.push({
                id: uuidv4(),
                title: title,
                content: content,
                done: false
            });

            break;

        case actionTypes.REMOVE_TASK:

            taskObj = action.payload;
            taskID = todos.lastIndexOf(taskObj);
            todos.splice(taskID, 1);

            break;


        case actionTypes.TOGGLE_DONE:

            taskObj = action.payload;
            taskID = todos.lastIndexOf(taskObj);
            todos[taskID] = {
                ...taskObj,
                done: !taskObj.done
            };

            break;

        default: break;
    }

    state = {
        ...state,
        todos: [...todos]
    };


    localStorage.setItem('todoList', JSON.stringify(state));

    return state;

};

export default todoReducer;