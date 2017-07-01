//Importing Libraries
import React, {Components, PropTypes} from 'react'

export default class ToDoItem extends Components {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <li className="todo-item">
        {
          this.props.completed
          ? (
            <div>
              <div className="todo-title done">
                {this.props.title}
              </div>
              <div
                className="todo-button pull-right hover-light"
                onClick={() => this.props.remove(this.props.index)}
              >
                <i className="fa fa-trash-o"></i>
              </div>
              <div
                className="todo-button pull-right hover-light"
                onClick={() => this.props.changeStatus(false)}
              >
                <i className="fa fa-undo"></i>
              </div>
            </div>
          )
          : (
            <div>
              <div className="todo-title">
                {this.props.title}
              </div>
              <div
                className="todo-button pull-right hover-light"
                onClick={() => this.props.remove(this.props.index)}
              >
                <i className="fa fa-trash-o"></i>
              </div>
              <div
                className="todo-button pull-right hover-light"
                onClick={() => this.props.changeStatus(true)}
              >
                <i className="fa fa-check"></i>
              </div>
            </div>
          )
        }
      </li>
    )
  }
}

ToDoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  status: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
