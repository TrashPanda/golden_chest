var React = require('react');

// card component, encapsule a single card data
var HsCard = React.createClass({
  render: function() {
    var cardobj = this.props.source;

    console.log(cardobj);
    return (
      <div className="hsCard">
        <div>hs card ready</div>
        {cardobj.map(function(obj){
          return <div>{obj.imgGold}</div>;
        })}
      </div>
    );
  }
});


module.exports = HsCard;
