import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
        ))}
      </ul>
    )
  }
}

export default TodosList