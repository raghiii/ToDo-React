//Importing Libraries
import React from 'react';

import ToDoItem from './ToDoItem';

var ToDoList = React.createClass({

    propTypes: {
        todos: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            date: React.PropTypes.object.isRequired,
            id: React.PropTypes.number.isRequired,
            completed: React.PropTypes.bool.isRequired,
        })).isRequired,

        changeStatus: React.PropTypes.func.isRequired,
        remove: React.PropTypes.func.isRequired,

    },

    changeStatus: function(index,bool){
        this.props.changeStatus(index,bool);
    },

    remove: function(index){
      this.props.remove(index);
    },

    render: function() {
        return (
            <ul className="todo-list">
                {
                    this.props.todos.map(function(todo,index){
                        return (
                            <ToDoItem
                                title={todo.title}
                                key={todo.id}
                                completed={todo.completed}
                                status={ function(bool){ this.changeStatus(index,bool)}.bind(this) }
                                remove={ function(){ this.remove(index)}.bind(this) }
                            />
                        );
                    }.bind(this))
                }
            </ul>
        )
    },
});


export default ToDoList;
