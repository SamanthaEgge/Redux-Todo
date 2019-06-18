import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList'
import { addNewTodo } from './actions/actions.js'

class App extends Component {
  state = {
    newTodo: ''
  }

  handleChanges = event => {
    this.setState({ newTodo: event.target.value })
  }

  addTodo = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render () {
    return (
      <div className="App">
        <h2>Todo List: </h2>
        <TodoList 
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          todolist={this.props.todolist} />
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist
  }
}

export default connect(mapStateToProps, { addNewTodo })(App);
