var ReactDOM = require('react-dom');
var React = require('react');


//import components
var settings = require('./settings.js');
var HsChest = require('./HsChest.js');




/*hierarchy
-Chest      handles layout
  -NeutralButton
  -HeroButton
  -CardBackButton
  -DisplayRegion
    -Cards


8 cards per page, flip left or right
*/



ReactDOM.render(
  //<div>ready</div>,
  <HsChest url={settings.url} apiKey={settings.apiKey} />,
  document.getElementById('root')
);
