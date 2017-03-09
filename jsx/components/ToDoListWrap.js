//Importing Libraries
import React from 'react';

import EmptyToDo from './EmptyToDo';
import ToDoList from './ToDoList';

var ToDoListWrap = React.createClass({
    propTypes: {
        todoArr: React.PropTypes.array.isRequired,
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
        <div className="row">
          <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
             {
                this.props.todoArr.length > 0 ?
                    <ToDoList
                        todos={this.props.todoArr}
                        changeStatus={ function(index,bool){ this.changeStatus(index,bool)}.bind(this) }
                        remove={ function(index){ this.remove(index) }.bind(this) }
                    />
                :
                    <EmptyToDo />
             }
          </div>
        </div>
      )
    },
});


export default ToDoListWrap;
