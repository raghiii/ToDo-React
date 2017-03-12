//Importing Libraries
import React, {Components, PropTypes} from 'react';
//Importing UI Components
import Time from './Time';
import Inputheading from './Inputheading';
import ToDoInput from './ToDoInput';
import ToDoListWrap from './ToDoListWrap';

export default class Application extends Components {

  getDefaultProps() {
    return {todoArr: TODO}
  }

  getInitialState() {
    return {todos: this.props.todoArr};
  }

  changeStatus(index, bool) {
    this.state.todos[index].completed = bool;
    this.setState(this.state);
  }

  remove(index) {
    this.state.todos.splice(index, 1);
    this.setState(this.state);
  }

  addTodo(val) {
    if (this.state.todos.length < 5) {
      this.state.todos.push({title: val, date: new Date(), id: index, completed: false});
      this.setState(this.state);
      index++;
    }
  }

  render() {
    return (
      <div className="container glass md-margin-top-10">
        <Time/>
        <Inputheading/>
        {
          this.state.todos.length < 5
          ? <ToDoInput addTodo={function(val) {
              this.addTodo(val)
            }.bind(this)}/>
          :
          ""
        }

        <ToDoListWrap todoArr={this.state.todos} changeStatus={function(index, bool) {
          this.changeStatus(index, bool)
        }.bind(this)} remove={function(index) {
          this.remove(index)
        }.bind(this)}/>
      </div>
    )
  }
}

Application.propTypes = {
  todoArr: PropTypes.array
};
