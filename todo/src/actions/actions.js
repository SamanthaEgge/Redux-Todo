export const ADD_NEW_TODO = 'ADD_NEW_TODO';

export function addNewTodo(newTodo) {
    console.log('action', newTodo);
    return {
        type: ADD_NEW_TODO,
        payload: newTodo
    }
}