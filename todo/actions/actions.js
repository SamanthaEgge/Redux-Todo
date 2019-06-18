export const ACTION = 'ACTION';

export const action = (todo) => {
    console.log('todo', todo)
    return {
        type: 'ACTION',
        payload: +1
    }
}