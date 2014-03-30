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
   * `.venue(venueId, searchObj, callback)`
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

## License

(The MIT License)

Copyright (c) 2012-2014 TJ Krusinski &lt;tj@futura.io&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
