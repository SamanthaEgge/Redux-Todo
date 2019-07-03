import React from 'react';

const TodoList = (props) => {
    return(
        <div className='todo-list'>
          {props.todolist.map(todo => (
              <div>
                    <h4 onClick={event => props.toggleCompleted(event, todo.id)} key={todo.id}>
                        {todo.task}
                        {/* {todo.completed} */}
                    </h4>
                    <button onClick={event => props.deleteTask(event, todo.id)}>delete</button>
            </div>
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