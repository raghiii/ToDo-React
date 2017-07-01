//Importing Libraries
import React, {Components, PropTypes} from 'react'
//Importing UI Components
import ToDoItem from './ToDoItem';

export default class ToDoList extends Components {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="todo-list">
        {
          this.props.todos.map(function(todo, index) {
          return (
            <ToDoItem
              index={index}
              title={todo.title}
              key={todo.id}
              completed={todo.completed}
              status={this.props.changeStatus}
              remove={this.props.remove}
            />
          );
        }.bind(this))
        }
      </ul>
    )
  }
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  changeStatus: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};
