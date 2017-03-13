//Importing Libraries
import React, {Components, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActionCreators from '../actions/todo-actions';
//Importing UI Components
import Time from './Time';
import Inputheading from './Inputheading';
import ToDoInput from './ToDoInput';
import ToDoListWrap from './ToDoListWrap';

class Application extends Components {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };
  render() {
    const {dispatch, todos } = this.props;
    const addTodo = bindActionCreators(TodoActionCreators.addTODO, dispatch);
    const changeStatus = bindActionCreators(TodoActionCreators.updateTODO, dispatch);
    const removeTodo = bindActionCreators(TodoActionCreators.removeTODO, dispatch);
    return (
      <div className="container glass md-margin-top-10">
        <Time/>
        <Inputheading/>
        {
          todos.length < 5
          ? <ToDoInput addTodo={addTodo}/>
          :
          ""
        }

        <ToDoListWrap
          todos={todos}
          changeStatus={changeStatus}
          remove={removeTodo}/>
        </div>
    )
  }
}

const mapStateToProps = state => (
  {
    todos: state
  }
);

export default connect(mapStateToProps)(Application);
