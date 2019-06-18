import React from 'react';

const TodoList = (props) => {
    return(
        <div className='todo-list'>
          {props.todolist.map(todo => (
            <h4 onClick={event => props.toggleCompleted(event, todo.id)} key={todo.id}>
              {todo.task}
              {/* {todo.completed} */}
              <span onClick={event => props.deleteTask(event, todo.id)}>delete task</span>
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