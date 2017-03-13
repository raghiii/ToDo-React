//Importing Libraries
import React, {Components, PropTypes} from 'react';
//Importing UI Components
import EmptyToDo from './EmptyToDo';
import ToDoList from './ToDoList';

export default class ToDoListWrap extends Components {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
          {
          this.props.todos.length > 0
            ?
            <ToDoList
                todos={this.props.todos}
                changeStatus={this.props.changeStatus}
                remove={this.props.remove}
            />
            : <EmptyToDo/>
          }
        </div>
      </div>
    )
  }
}

ToDoListWrap.propTypes = {
  todos: PropTypes.array.isRequired,
  changeStatus: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};
