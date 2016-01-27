var React = require('react');


//simulate chest navigation

var HsNav = React.createClass({
  //go to the previous and next page

  handleClickPrev:function(e) {
    e.preventDefault();
    this.props.onClickPrev();
  },



  handleClickNext: function(e) {
    e.preventDefault();
    this.props.onClickNext();
  },


  render: function(){
    return (
      <div className="HsNav">

        <div className="col-xs-6 text-left">
          <div className="previous">
            {/*handle click action on button prev*/}
            <button
              onClick={this.handleClickPrev}
              type="button" className="btn btn-default btn-lg"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
            </button>
          </div>
        </div>

        <div className="col-xs-6 text-right">
          <div className="next">
            {/*handle click action on button next*/}
            <button
              onClick={this.handleClickNext}
              type="button" className="btn btn-default btn-lg"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
            </button>
          </div>
        </div>


      </div>
    );
  }
});

module.exports = HsNav;
