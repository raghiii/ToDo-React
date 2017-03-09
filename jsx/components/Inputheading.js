//Importing Libraries
import React from 'react';

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

export default Inputheading;
