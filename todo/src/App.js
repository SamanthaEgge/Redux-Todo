import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import { addNewTodo, toggleCompletedTask, deleteSelectedTask } from './actions/actions.js';

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
    // console.log('newTodo',this.props.addNewTodo)
  }
  
  toggleCompleted = (event, todoID) => {
    event.preventDefault();
    this.props.toggleCompletedTask(todoID)
  }

  deleteTask = (event, todoID) => {
    event.preventDefault();
    this.props.deleteSelectedTask(todoID)
  }

  render () {
    return (
      <div className="App">
        <h2>Todo List: </h2>
        <TodoList 
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          todolist={this.props.todolist} 
          newTodo={this.state.newTodo}
          toggleCompleted = {this.toggleCompleted}
          deleteTask = {this.deleteTask} />
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist
  }
}

export default connect(mapStateToProps, { addNewTodo, toggleCompletedTask, deleteSelectedTask })(App);
