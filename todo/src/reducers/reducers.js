import { ADD_NEW_TODO, TOGGLE_COMPLETED_TASK, DELETE_SELECTED_TASK } from '../actions/actions'

const initialState = {
    todolist: [
        {task: 'HERE I AMMMM DOO DOO', completed: false, id: 124 },
        {task: 'task task task task task', completed: true, id: 666 }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const newTodo = { task: action.payload, completed: false, id: Date.now() }
            return {
                ...state,
                todolist: [
                    ...state.todolist,
                    newTodo
                ]
            }

        case TOGGLE_COMPLETED_TASK:
            return {
                ...state,
                todolist: state.todolist.filter(todo => {
                    if (action.payload === todo.id) {
                        return {
                          ...todo,
                          completed: !todo.completed
                        };
                      } else {
                        return todo;
                      }
                })
            }
        
        case DELETE_SELECTED_TASK:
            return {
                ...state,
                todolist: state.todolist.filter(todo =>
                    action.payload !== todo.id
                )
            }

        default:
            return state;
    }
}

export default todoReducer;