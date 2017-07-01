//Importing Libraries
import React, {Components, PropTypes} from 'react'

export default class EmptyToDo extends Components {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="todo-list">
        <li className="todo-item">
          <div className="text-center">
            No TODO's Yet !</div>
        </li>
      </ul>
    );
  }
}
