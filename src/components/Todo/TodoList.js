import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  edit(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
    
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <div key={todo.id} classNames="todo">
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.edit}
          />
        </div>
      );
    });
    return (
      <div className="TodoList">
        <h1>{this.props.name}</h1>
        <ul>
          <div className="todo-list">{todos}</div>
        </ul>

        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}
export default TaskList;
