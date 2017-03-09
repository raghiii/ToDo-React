//Importing Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// App Components
var index = 2;
var Time = React.createClass({
   getInitialState: function(){
      return {
        time: new Date(),
      };
   },

   componentDidMount() {
    this.timer = setInterval(this.tick, 100);
   },

   componentWillUnmount: function() {
    clearInterval(this.timer);
   },

   tick: function(){
        this.setState({
            time: new Date,
        })
   },

   render: function(){
       return (
           <div className="row">
              <div className="col-xs-12 clock">
                  <div className="jumbotron-text text-center"> {this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </div>
              </div>
           </div>
       )
   },

});

var Inputheading = React.createClass({

    propTypes: {
     heading: React.PropTypes.string,
    },

    getDefaultProps: function() {
       return {
           heading: "WHAT ARE YOUR ToDO'S FOR TODAY",
       }
    },
    render: function(){
        return (
            <div className="row">
              <div className="col-xs-12">
                  <div className="input-heading">
                       { this.props.heading }
                  </div>
              </div>
            </div>
        )
    },
});

var ToDoInput = React.createClass({
    propTypes: {
        addTodo: React.PropTypes.func.isRequired,
    },

    getInitialState: function(){
        return {
            val: "",
        }
    },

    onTextChange: function(e){
        if((this.state.val.length < 21)||(this.state.val.length > e.target.value.length)){
            this.setState({
                val: e.target.value,
            })
        }
    },



    handleKeyPress:  function(press){
        if(press.key == 'Enter'){
            this.props.addTodo(this.state.val);
            this.setState({
                val: "",
            })
        }
    },

    render: function(){
        return (
            <div className="row">
              <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                  <input name="todo" className="todo" value={this.state.val} onChange={this.onTextChange} onKeyPress={this.handleKeyPress}></input>
              </div>
            </div>
        )
    },
});


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


var Application = React.createClass({
    propTypes: {
        todoArr: React.PropTypes.array,
    },

    getDefaultProps: function() {
        return {
          todoArr: TODO,
        }
    },

    getInitialState: function() {
        return {
          todos: this.props.todoArr,
        };
    },

    changeStatus: function(index,bool){
        this.state.todos[index].completed = bool;
        this.setState(this.state);
    },

    remove: function(index){
      this.state.todos.splice(index,1);
      this.setState(this.state);
    },

    addTodo: function(val){
        if(this.state.todos.length < 5){
            this.state.todos.push({
                title: val,
                date: new Date(),
                id: index,
                completed: false,
            });
            this.setState(this.state);
            index++;
        }
    },

    render: function(){
        return (
        <div className="container glass md-margin-top-10">
            <Time />
            <Inputheading />
            { this.state.todos.length < 5 ?
                <ToDoInput addTodo={ function(val){ this.addTodo(val) }.bind(this) }/>
                    :
                ""
            }

            <ToDoListWrap
                todoArr={ this.state.todos }
                changeStatus = { function(index,bool){ this.changeStatus(index,bool)}.bind(this) }
                remove={ function(index ){ this.remove(index) }.bind(this) }

            />
        </div>
        )
    }
});


ReactDOM.render(<Application/>,document.getElementById('root'));
