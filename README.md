# Foursquare Venues

Foursquare Venues Platform API Wrapper for Node.js

To Install

`npm install node-foursquare-venues`


``` javascript
var foursquare = require('node-foursquare-venues')('clientId', 'secretId')
```

## Reference
[API Reference](https://developer.foursquare.com/overview/venues)

The module follows the associated API routes of Foursquare.

All methods take a callback as their last parameter.

A `searchObj` is an object containing the properties [outlined here.](https://developer.foursquare.com/docs/venues/search)

* `foursquare.venues`
   * `.venue(venueId, callback)`
   * `.categories(callback)`
   * `.search(searchObj, callback)`
   * `.explore(searchObj, callback)`
   * `.suggestcompletion(searchObj, callback)`
   * `.trending(searchObj, callback)`
   * `.events(venueId, callback)`
   * `.hours(venueId, callback)`
   * `.likes(venueId, callback)`
   * `.links(venueId, callback)`
   * `.listed(venudId, filterObj, callback)`
   * `.menu(venueId, callback)`
   * `.photos(venueId, filterObj, callback)`
   * `.tips(venueId, filterObj, callback)`
   
* `foursquare.tips`
   * `.search(searchObj, callback)`
   * `.done(tipId, filterObj, callback)`
   * `.likes(tipId, callback)`
   * `.listed(tipId, filterObj, callback)`
   
* `foursquare.lists`
   * `.detail(listId, filterObj, callback)`
   * `.followers(listId, callback)`
   
* `foursquare.specials`
   * `.detail(specialId, filterObj, callback)`
   * `.search(searchObj, callback)`

* `foursquare.events`
   * `.categories(callback)`
   * `.search(searchObj, callbac)`

* `foursquare.pages`
   * `.venues(pageId, filterObj, callback)`


To run the tests run

`mocha tests 'clientId' 'secretId'`