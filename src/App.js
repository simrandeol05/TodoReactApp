import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";
import AddToDo from "./AddForm";

class App extends Component {
  state = {
    todo: [
      { id: 1, content: "Get milk" },
      { id: 2, content: "Buy shopping bag" }
    ]
  };

  deleteTodo = id => {
    const afterDeletTodo = this.state.todo.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todo: afterDeletTodo
    });
    // return this.state.todo.id == id;
  };

  addToDo = todo => {
    todo.id = Math.random();
    let addNewtodos = [...this.state.todo, todo];
    this.setState({
      todo: addNewtodos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="centre blue-text">Todo's</h1>
        <Todos todos={this.state.todo} deleteTodo={this.deleteTodo} />
        <AddToDo addTodo={this.addToDo} />
      </div>
    );
  }
}

export default App;
