var React = require('react');
var $ = require('jquery');        //solely for ajax request, this can be replaced to reduce size and increase performance

//subcomponent
var HsCardTable = require('./HsCardTable.js');
var HsNav = require('./HsNav.js');
var HsClass = require('./HsClass.js');




//Chest container, base component
var HsChest = React.createClass({
  //Static properties and method guideline
  //Static properties: they are neither changed (state), nor needed to be pass down or pass up(props).
  //-cardsPerPage
  //Static method: return required properties base on state. They are normally used with immediate invocation
  //-cardsOnCurrentPage(), totalPages()

  //cards on current page
  cardsPerPage: 8,


  //slice the cards of the current page to be passed down as props
  cardsOnCurrentPage: function(){
    console.log('current page used in slicing cards'+ this.state.currentPage);
    var start = this.cardsPerPage*(this.state.currentPage -1);
    var end = this.cardsPerPage*this.state.currentPage;
    var cardsOnCurrentPage = this.state.cards.slice(start, end);
    return cardsOnCurrentPage;
  },


  totalPages: function(){
    return Math.ceil(this.state.cards.length/this.cardsPerPage);
  },

  //setup with default methods
  //state initialization
  getInitialState: function() {
    return {
      cards:[],
      currentPage: 1,
      currentClass: 'Druid'
      //totalPages: null,
    };
  },



  //invoke once immediately after initial rendering on clientside
  componentDidMount: function() {
    //load default class
    this.loadCardsByClass(this.state.currentClass);
  },


  //Custom methods
  //load cards, the cardURL option is available at http://hearthstoneapi.com/, note that uppercase matters
  loadCardsFromServer: function(cardURL){
    console.log('load ready')
    $.ajax({
      url: this.props.url+ cardURL,
      headers: {'X-Mashape-key': this.props.apiKey},
      dataType: 'json',
      cache: false,
      success: function(cards) {
        var validCards = [];            //filter the card with only when golden gif is present
        cards.forEach(function(card){   //iterate through the array
          if(card.imgGold) {
            validCards.push(card);      // push valid card into the validation array
          }
        });
        this.setState({
          cards: validCards,
          currentPage: 1,
        });
        console.log(this.state);
      }.bind(this)
    });

  },



  //set the currentclass state, invoke loadCurrentClass
  loadCardsByClass: function(hsClass) {
    //this.setState({currentClass: hsClass});
    var cardURL = 'classes/' + hsClass;
    this.loadCardsFromServer(cardURL);
    this.setState({currentClass: hsClass});
  },



  // go to the next page
  goToNextPage: function(){
    if(this.state.currentPage < this.totalPages()) {    //go to next only at the pages before last page
      var next = this.state.currentPage + 1;
      this.setState({currentPage: next});
    }
  },

  //got to the previous page
  goToPrevPage:function(){
    if(this.state.currentPage >= 2) {
      var prev = this.state.currentPage - 1;            //go to prev only if it's not at page 2 or above
      this.setState({currentPage: prev});
    }
  },


  //render  function
  render: function() {
    return (
      <div className="container HsChest">

        <h1>Current Class: {this.state.currentClass}</h1> {/*to be replaced by icon representation*/}

        <HsClass
          onClickClass={this.loadCardsByClass}
        />

        <HsCardTable
          totalPages={this.totalPages()}
          cardsOnCurrentPage={this.cardsOnCurrentPage()}
        />

        {/*navigate to the prev and next page*/}
        <HsNav
          onClickPrev={this.goToPrevPage}
          onClickNext={this.goToNextPage}
        />
      </div>
    );
  }

});



module.exports = HsChest;
