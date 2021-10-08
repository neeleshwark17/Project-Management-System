import React, { Component } from "react";

import "./NewTodoForm.css";
import { v4 as uuidv4 } from 'uuid';
uuidv4();
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "", isEditing: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
    this.setState({ isEditing: false });
  }
  

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    return (
      <>
        <div>
          {this.state.isEditing ? (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="create task..."
                id="task"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
              />
            </form>
          ) : (
            <button id="addTask"   onClick={this.toggleForm}> + add tasks</button>
          )}
        </div>
      </>
    );
  }
}
export default NewTodoForm;

