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



var Application = React.createClass({
    render: function(){
        return (
        <div className="container glass md-margin-top-10">
            <Time />
            <Inputheading />
            <ToDoInput />
            <ToDoListWrap />
        </div>  
        )
    }
});


ReactDOM.render(<Application/>,document.getElementById('root'));
