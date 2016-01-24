var React = require('react');
var $ = require('jquery');


var HsCard = require('./HsCard.js');


//Chest container, base component
var HsChest = React.createClass({

  //setup with default methods
  //initialization, clear the state
  getInitialState: function() {
    return {
      data:[]
    };
  },


  //invoke once immediately after initial rendering on clientside
  componentDidMount: function() {
    this.loadCardsFromSever();
  },


  //Custom methods
  //load cards data
  loadCardsFromSever: function(){
    $.ajax({
      url: this.props.url,
      headers: {"X-Mashape-key": this.props.apiKey},
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        console.log(data[0].attack);
      }.bind(this)
    });

  },



  render: function() {
    return (
      <div className="hsChest">
        <HsCard  source={this.state.data} />
      </div>
    );
  }

});



module.exports = HsChest;
