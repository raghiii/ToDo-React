//Importing Libraries
import React, {Components, PropTypes } from 'react';


export default class Time extends Components{
   constructor() {
     super()
     this.state = {
          time: new Date(),
     };
   }


   componentDidMount() {
    this.timer = setInterval(this.tick, 100);
   }

   componentWillUnmount() {
    clearInterval(this.timer);
   }

   tick(){
        this.setState({
            time: new Date,
        })
   };

   render(){
       return (
           <div className="row">
              <div className="col-xs-12 clock">
                  <div className="jumbotron-text text-center"> {this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </div>
              </div>
           </div>
       )
   }

}
