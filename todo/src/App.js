import React, { Component } from 'react';

import TodoList from './components/TodoList'

class App extends Component {
  state = {
    todo: []
  }

  render () {
    return (
      <div className="App">
        <h2>Todo List: </h2>
        <TodoList />
        <TodoForm />
      </div>
    )
  };
}

const mapStateToProps = (todo) => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps, { action })(App);
