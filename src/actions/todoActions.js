import * as actionTypes from "./actionTypes";

export function addTask(taskTitle, taskContent) {
    return {
        type: actionTypes.ADD_TASK, 
        payload: {
            title: taskTitle,
            content: taskContent
        }
    }
}

export function removeTask(taskObj) {

    return {
        type: actionTypes.REMOVE_TASK,
        payload: taskObj
    }
}

export function toggleDone(taskObj) {
    return {
        type: actionTypes.TOGGLE_DONE,
        payload: taskObj
    }
}