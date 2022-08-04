import { findAllByTestId } from '@testing-library/react'
import React, { Component } from 'react'
import Header from './Header';
import Todos from './Todos';

export default class TodoApp extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true 
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            } 
        ]
    };
  handleCheckboxChange = id => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if (todo.id===id){
          todo.completed=!todo.completed;
        }
        return todo;
      })
    });
  };
  deleteTodo = id => {
    console.log("delete", id);
  };
  render() {
    return (
      <div className='container'>
        <Header />
        <Todos todos={this.state.todos} 
        handleChange = {this.handleCheckboxChange}
        deleteTodo = {this.deleteTodo} />
      </div>
    )
  }
}
