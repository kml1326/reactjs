import React, { Component } from 'react';
import '../styles/App.scss';
import TodoLists from './ToDoLists';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      activeTab : 'all',
      toDoArray : JSON.parse(localStorage.getItem('reactTodo')) || [],
      activeTodoArray : [],
      completedTodoArray : []
    }
  }

  handleAddTodo = (e) => {
    if(e.key === 'Enter') {
      const inputValue = e.target.value;
      if(inputValue !== '') {
        let obj = { done: false};
        obj.value = inputValue;
        localStorage.setItem('reactTodo', JSON.stringify([...this.state.toDoArray, obj]));
        this.setState( { 
          toDoArray: [...this.state.toDoArray, obj],
          activeTodoArray : [...this.state.activeTodoArray, obj]
         } );
        e.target.value = '';
      }
    }
  }

  handleDeleteTodo = e => {
    let newArray = this.state.toDoArray;
    newArray.splice( e.target.dataset.id, 1);
    localStorage.setItem('reactTodo', JSON.stringify(newArray));
    this.setState( {
      toDoArray : newArray
    } );
  }

  handleToggle = e => {
    let dataId = e.target.dataset.id;
    let newArray = [...this.state.toDoArray];
    newArray[dataId].done = !newArray[dataId].done;
    let filteredArray = newArray.filter(todo => (todo.done === true));
    let activeArray = newArray.filter(todo => (todo.done === false));
    localStorage.setItem('reactTodo', JSON.stringify(newArray));
    this.setState( {
      toDoArray : newArray,
      activeTodoArray : activeArray,
      completedTodoArray : filteredArray
    } );
  }

  handleAllTodo = () => {
    let allTodo = this.state.toDoArray.map(todo => todo);
    this.setState( {
      toDoArray: allTodo,
      activeTab : 'all'
    } );
  }

  handleActiveTodo = () => {
    let activeTodo = this.state.toDoArray.filter(todo => (todo.done === false))
    this.setState({
      activeArray: activeTodo,
      activeTab : 'active'
    })
    
  }

  handleCompletedTodo = () => {
    let completedTodo = this.state.toDoArray.filter(todo => (todo.done === true))
    this.setState({
      completedTodoArray : completedTodo,
      activeTab : 'completed'
    })
  }

  handleClearComplete = () => {
    let unCompleteTodo = this.state.toDoArray.filter(todo => (todo.done === false));
    this.setState( {
      toDoArray : unCompleteTodo,
      completedTodoArray : [],
      activeTab : 'clearCompleted'
    } )
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
            array = { this.state.activeTab === 'all' ? this.state.toDoArray :
                             this.state.activeTab === 'completed' ? this.state.completedTodoArray :
                             this.state.activeTab === 'active' ? this.state.activeArray : this.state.activeTodoArray }
            toDoArray = { this.state.toDoArray }
            onToggle = { this.handleToggle } 
            onDelete = { this.handleDeleteTodo }
            onAllTodo = { this.handleAllTodo } 
            onActiveTodo = { this.handleActiveTodo } 
            onCompletedTodo = { this.handleCompletedTodo }
            activeTab = { this.state.activeTab }
            handleClearComplete = { this.handleClearComplete }
          />

        </div>
      </div>
    );
  }
}

export default TodoApp;
