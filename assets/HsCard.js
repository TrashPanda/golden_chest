var React = require('react');


var HsCard = React.createClass({
  render: function() {
    return (
      <div className="hsCard">
        <img src={this.props.source}></img>
      </div>
    );
  }
});

module.exports = HsCard;
