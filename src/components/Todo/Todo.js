import React, { Component } from "react";
import "./Todo.css";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div key="editing" classNames="form">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            {/* <button>Save</button> */}
          </form>
        </div>
      );
    } else {
      result = (
        <ul key="normal" classNames="task-text">
          <li className="Todo-task">{this.props.task}</li>
        </ul>
      );
    }
    return (
      <div className={this.props.completed ? "Todo completed" : "Todo"}>
        
          <div className="result">{result}</div>
          
          <div className="buttonss">
            <button onClick={this.toggleForm}>
            <i class="far fa-edit" />
            </button>
            <button onClick={this.handleRemove}>
            <i class="far fa-trash-alt"/>
            </button>
          </div>
    
      </div>
    );
  }
}
export default Todo;
