//Importing Libraries
import React, {Components, PropTypes} from 'react';

export default class ToDoInput extends Components {

  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
  }

  onTextChange(e) {
    if ((this.state.val.length < 21) || (this.state.val.length > e.target.value.length)) {
      this.setState({val: e.target.value})
    }
  }

  handleKeyPress() {
    if (press.key == 'Enter') {
      this.props.addTodo(this.state.val);
      this.setState({val: ""})
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
          <input name="todo" className="todo" value={this.state.val} onChange={this.onTextChange} onKeyPress={this.handleKeyPress}></input>
        </div>
      </div>
    )
  }
}

ToDoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
