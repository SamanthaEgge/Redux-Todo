import { ADD_NEW_TODO } from '../actions/actions'

const initialState = {
    todolist: [
        {task: 'HERE I AMMMM DOO DOO', completed: false },
        {task: 'task task task task task', completed: true }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const newTodo = { name: action.payload, completed: false }
            return {
                ...state,
                todolist: [
                    ...state.todolist,
                    newTodo
                ]
            }
        default:
            return state;
    }
}

export default todoReducer;