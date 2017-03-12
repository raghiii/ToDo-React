//Importing Libraries
import React, {Components, PropTypes} from 'react';
//Importing UI Components
import EmptyToDo from './EmptyToDo';
import ToDoList from './ToDoList';

export default class ToDoListWrap extends Components {

  changeStatus(index, bool) {
    this.props.changeStatus(index, bool);
  },

  remove(index) {
    this.props.remove(index);
  },

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
          {
          this.props.todoArr.length > 0
            ? <ToDoList todos={this.props.todoArr} changeStatus={function(index, bool) {
                this.changeStatus(index, bool)
              }.bind(this)} remove={function(index) {
                this.remove(index)
              }.bind(this)}/>
            : <EmptyToDo/>
          }
        </div>
      </div>
    )
  }
}

ToDoListWrap.propTypes = {
  todoArr: React.PropTypes.array.isRequired,
  changeStatus: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired
};
