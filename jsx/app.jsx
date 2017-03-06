var Time = React.createClass({
   render: function(){
       return (
           <div className="row">
              <div className="col-xs-12 clock">
                  <div className="jumbotron-text text-center"> 17:44 </div>
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
    getInitialState: function(){
        return {
            val: "",
        }    
    },
    
    onTextChange: function(e){
        this.setState({
            val: e.target.value,
        })
    },
    
    render: function(){
        return (
            <div className="row">
              <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                  <input name="todo" className="todo" value={this.state.val} onChange={this.onTextChange}></input>
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
    },
    
    done: function(){
        this.props.status(true);
    },
    
    undone: function(){
        this.props.status(false);
    },
    render: function() {
        return (
            <li className="todo-item">
                { 
                 this.props.completed ? 
                 (
                     <div>
                        <div className="todo-title done"> {this.props.title} </div>
                        <div className="todo-button pull-right hover-light"> <i className="fa fa-trash-o"> </i> </div>
                        <div className="todo-button pull-right hover-light" onClick={this.undone}> <i className="fa fa-undo"> </i> </div>
                     </div>
                 )
                 : 
                 (
                     <div>
                        <div className="todo-title"> {this.props.title} </div>
                        <div className="todo-button pull-right hover-light"> <i className="fa fa-trash-o"> </i> </div>
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
        
    },
 
    changeStatus: function(index,bool){
        this.props.changeStatus(index,bool);
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
    },
    
    changeStatus: function(index,bool){
        this.props.changeStatus(index,bool);
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
    
    render: function(){
        return (
        <div className="container glass md-margin-top-10">
            <Time />
            <Inputheading />
            <ToDoInput />
            <ToDoListWrap 
                todoArr={ this.state.todos }
                changeStatus = { function(index,bool){ this.changeStatus(index,bool)}.bind(this) } 
            />
        </div>  
        )
    }
});


ReactDOM.render(<Application/>,document.getElementById('root'));
