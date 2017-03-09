//Importing Libraries
import React from 'react';


var EmptyToDo = React.createClass({
    render: function() {
        return (
            <ul className="todo-list">
                <li className="todo-item">
                    <div className="text-center"> No TODO's Yet !</div>
                </li>
            </ul>
        );
    },
});


export default EmptyToDo;
