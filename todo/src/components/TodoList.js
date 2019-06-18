import React from 'react';

const TodoList = (props) => {
    return(
        <div className='todo-list'>
          {props.todolist.map((todo, index) => (
            <h4 key={todo.id}>
              {todo.task}
              {/* {todo.completed} */}
            </h4>
          ))}
        </div>
    )

}

export default TodoList