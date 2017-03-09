//Importing Libraries
import React from 'react';

var ToDoItem = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired,
        status: React.PropTypes.func.isRequired,
        remove: React.PropTypes.func.isRequired,
    },

    done: function(){
        this.props.status(true);
    },

    undone: function(){
        this.props.status(false);
    },

    remove: function(){
        this.props.remove();
    },

    render: function() {
        return (
            <li className="todo-item">
                {
                 this.props.completed ?
                 (
                     <div>
                        <div className="todo-title done"> {this.props.title} </div>
                        <div className="todo-button pull-right hover-light" onClick={this.remove}> <i className="fa fa-trash-o"> </i> </div>
                        <div className="todo-button pull-right hover-light" onClick={this.undone}> <i className="fa fa-undo"> </i> </div>
                     </div>
                 )
                 :
                 (
                     <div>
                        <div className="todo-title"> {this.props.title} </div>
                        <div className="todo-button pull-right hover-light" onClick={this.remove}> <i className="fa fa-trash-o"> </i> </div>
                        <div className="todo-button pull-right hover-light" onClick={this.done}> <i className="fa fa-check"> </i> </div>
                     </div>
                 )
                }
            </li>
        )
    },
});



export default ToDoItem;
