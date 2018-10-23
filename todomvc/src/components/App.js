import React, { Component } from 'react';
import '../styles/App.scss';
import TodoLists from './ToDoLists';
var i = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoArray : []
    }
  }

  handleAddTodo = (e) => {
    if(e.key === 'Enter') {
      const inputValue = e.target.value;
      let obj = { done: false, id:i };
      obj.value = inputValue;
      this.setState( { toDoArray: [...this.state.toDoArray, obj] } );
      e.target.value = '';
      i++;
    }
  }

  handleDeleteTodo = todoId => {
    const toDoArray = this.state.toDoArray.filter(d => d.id !== todoId);
		this.setState({ toDoArray });

  }

  handleToggle = todoId => {
    console.log(todoId,"on toggle")
  }


  render() {
    return (
      <div className="App">
      <input type='text' className='input-todo' onKeyDown={this.handleAddTodo}></input>
      <TodoLists 
        Array = { this.state.toDoArray } 
        onToggle = { this.handleToggle } 
        onDelete = { this.handleDeleteTodo }
      />
      </div>
    );
  }
}

export default App;
