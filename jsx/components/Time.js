//Importing Libraries
import React from 'react';


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

export default Time;
