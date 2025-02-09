export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_COMPLETED_TASK = 'TOGGLE_COMPLETED_TASK';
export const DELETE_SELECTED_TASK = 'DELETE_SELECTED_TASK';

export const addNewTodo = (newTodo) => {
    console.log('action', newTodo);
    return {
        type: ADD_NEW_TODO,
        payload: newTodo
    }
}

export const toggleCompletedTask = (taskID) => {
    console.log(taskID);
    return {
        type: TOGGLE_COMPLETED_TASK,
        payload: taskID
    }
}

export const deleteSelectedTask = (taskID) => {
    console.log(taskID);
    return {
        type: DELETE_SELECTED_TASK,
        payload: taskID
    }
}