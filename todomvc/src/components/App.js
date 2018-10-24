import React, { Component } from 'react';
import '../styles/App.scss';
import TodoLists from './ToDoLists';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      toDoArray : []
    }
  }

  handleAddTodo = (e) => {
    if(e.key === 'Enter') {
      const inputValue = e.target.value;
      if(inputValue !== '') {
        let obj = { done: false};
        obj.value = inputValue;
        this.setState( { toDoArray: [...this.state.toDoArray, obj] } );
        e.target.value = '';
      }
    }
  }

  handleDeleteTodo = e => {
    let newArray = this.state.toDoArray;
    newArray.splice( e.target.dataset.id, 1);
    this.setState( {toDoArray : newArray} );
  }

  handleToggle = e => {
    let dataId = e.target.dataset.id;
    this.setState( state => {state.toDoArray[dataId].done = !state.toDoArray[dataId].done})
  }

  handleAllTodo = () => {
    let allTodo = this.state.toDoArray.map(todo => todo);
    this.setState( {toDoArray: allTodo} );
  }

  handleActiveTodo = () => {
    let activeTodo = this.state.toDoArray.filter(todo => (todo.done === false))
    this.setState({toDoArray: activeTodo})
    console.log(activeTodo);
    
  }

  handleCompletedTodo = () => {
    let completedTodo = this.state.toDoArray.filter(todo => (todo.done === true))
    this.setState({toDoArray: completedTodo})
    console.log(completedTodo,"complete")
  }

  render() {
    return (
      <div className="TodoApp">
        <h1 className='heading'>todos</h1>
        <div className='container'>
          <input type='text' 
            className='input-todo' 
            onKeyDown={this.handleAddTodo}
            placeholder='What nedds to be done ?' 
          />
          <TodoLists 
            Array = { this.state.toDoArray } 
            onToggle = { this.handleToggle } 
            onDelete = { this.handleDeleteTodo }
            onAllTodo = { this.handleAllTodo } 
            onActiveTodo = { this.handleActiveTodo } 
            onCompletedTodo = { this.handleCompletedTodo }
          />  
        </div>
      </div>
    );
  }
}

export default TodoApp;
