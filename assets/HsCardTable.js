var React = require('react');

//subcomponent
var HsCard = require('./HsCard.js');


//table layout for the cards, 4*2 grid, 8 per page
var HsCardTable = React.createClass({
  render: function(){
    console.log(this.props.cardsOnCurrentPage);
    //iterate through card data and pass it to <HsCard>
    var cards = this.props.cardsOnCurrentPage.map(function(card){
      return (
        <div key={card.cardId} className="col-xs-3">
          <HsCard source={card.imgGold} />
        </div>
      );
    });

    return (
      <div className="hsCardTable">
        <div className='row'>
          {cards}
        </div>
      </div>
    );
  }
});


module.exports = HsCardTable;
