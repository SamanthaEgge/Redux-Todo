import React from 'react';

const TodoList = (props) => {
    console.log(props)
    return(
        <div className='todo-list'>
          {props.todolist.map(todo => (
            <h4 key={todo.id}>
              {todo.task}
              {/* {todo.completed} */}
            </h4>
          ))}

          <form className='todo-form' onSubmit={props.addTodo}>
              <input
              className='todo-input'
              type='text'
              value={props.newTodo}
              onChange={props.handleChanges}
              placeholder='...pet a dog!' />
          </form>
        </div>
    )

}

export default TodoList