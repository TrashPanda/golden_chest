var ReactDOM = require('react-dom');
var React = require('react');


//testing
//import components
var settings = require('../settings.js');
var HsChest = require('./HsChest.js');




/*hierarchy
-HsChest      handles layout
  -HsCardTable        4*2 arrangment
    -HsCards
  -HsNav              next/prev
  -HsClass              

*/



ReactDOM.render(
  <HsChest url={settings.url} apiKey={settings.apiKey} />,
  document.getElementById('root')
);
