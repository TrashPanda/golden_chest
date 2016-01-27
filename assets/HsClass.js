var React = require('react');


//class and neutral card filter
var HsClass = React.createClass({

  hsClasses: [
    'Druid',
    'Hunter',
    'Mage',
    'Priest',
    'Rogue',
    'Shaman',
    'Warlock',
    'Warrior',
    'Neutral'
  ],


  handleClickClass: function(hsClass){
    this.props.onClickClass(hsClass);
  },

  render: function() {

    var hsClassNodes = this.hsClasses.map( function(hsClass){
    //bind parameters be passed to the callback function, so that it can be passed back to the parents, without immediate invoking
      return(          
          <button
            onClick={this.handleClickClass.bind(this, hsClass)}
            key={hsClass}
            type="button" className="btn btn-default"
          >
            {hsClass}
          </button>
      );
    },this);

    return (
      <div className="hsClass">
        <div className="btn-group" role="group" aria-label="...">
          {hsClassNodes}
        </div>
      </div>

    );
  }
});

module.exports = HsClass;
