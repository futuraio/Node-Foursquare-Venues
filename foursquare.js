'use strict';

var https = require('https');
var querystring = require('querystring');

function noop () {};

module.exports = function(appId, secretKey){
  
  var fourSquare = {
    _request: function(method, path, callback){
      var requestOptions;
      var req;
      
      requestOptions = {
        host: "api.foursquare.com",
        method: method,
        port: 443,
        path: "/v2"+path,
        headers: {
          'Accept': 'text/json',
          'Accept-Language': this.locale,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': '0'
        },
      };
      
      req = https.request(requestOptions);
      this._response(req, callback);
      req.write('');
      req.end();

      req.on('error', function(){
        return callback('Trouble with network request to Foursquare', null);
      });
    },
    _response: function(req, callback){
      var me = this;
      var err = null;
        
      if (typeof req === 'function') return;
      
      req.on('response', function(res){
        var response = '';
        
        res.setEncoding('utf8');
        res.on('data', function(data){
          response += data;
        });
        res.on('end', function(){
          if (res.statusCode >= 300) err = res.statusCode;
          try {
            response = JSON.parse(response);
          } catch(e) {
            err = 'Foursquare did not return JSON';
          };
          return callback(err, response);
        });

        res.on('error', function(){
          return callback('Trouble with network request from Foursquare', null);
        });
      });
    },
    post: function(path, callback){
      this._request('POST', path, callback);
    },
    get: function(path, callback){
      this._request('GET', path, callback);
    },
    locale: 'en',
    query: function(path, obj){
      var requestData;
      
      if (obj) {
        requestData = querystring.stringify(obj);
        path += '?'+requestData+'&';
      } else {
        path += '?';
      };
      return path+'client_id='+appId+'&client_secret='+secretKey+'&v=20120928';
    },
    fail: function(cb) {
      cb = cb || noop;
      cb('Invalid parameters', null);
    },
  };
  
  return {
    venues: {
      venue: function(venueId, infoObj, callback){
        if (!callback) {
          callback = infoObj;
          infoObj = {};
        };
        if (!venueId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId, infoObj), callback);
      },
      categories: function(callback){
        if (!callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/categories'), callback);
      },
      search: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/search', infoObj), callback);
      },
      explore: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/explore', infoObj), callback);
      },
      suggestcompletion: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/suggestcompletion', infoObj), callback);
      },
      trending: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/trending', infoObj), callback);
      },
      events: function(venueId, callback){
        if (!venueId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/events'), callback);
      },
      hours: function(venueId, callback){
        if (!venueId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/hours'), callback);
      },
      likes: function(venueId, callback){
        if (!venueId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/likes'), callback);
      },
      links: function(venueId, callback){
        if (!venueId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/links'), callback);
      },
      listed: function(venueId, infoObj, callback){
        if (!venueId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/listed', infoObj), callback);
      },
      menu: function(venueId, callback){
        if (!venueId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/menu'), callback);
      },
      photos: function(venueId, infoObj, callback){
        if (!venueId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/photos', infoObj), callback);
      },
      tips: function(venueId, infoObj, callback){
        if (!venueId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/venues/'+venueId+'/tips', infoObj), callback);
      },
    },
    tips: {
      search: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/tips/search', infoObj), callback);
      },
      done: function(tipId, infoObj, callback){
        if (!tipId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/tips/'+tipId+'/done', infoObj), callback);
      },
      likes: function(tipId, callback){
        if (!tipId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/tips/'+tipId+'/likes'), callback);
      },
      listed: function(tipId, infoObj, callback){
        if (!tipId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/tips/'+tipId+'/listed', infoObj), callback);
      },
    },
    lists: {
      detail: function(listId, infoObj, callback){
        if (!listId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/lists/'+listId, infoObj), callback);
      },
      followers: function(listId, callback){
        if (!listId || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/lists/'+listId+'/followers'), callback);
      },
    },
    specials: {
      detail: function(listId, infoObj, callback){
        if (!listId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/specials/'+listId, infoObj), callback);
      },
      search: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/specials/search', infoObj), callback);
      },
    },
    events: {
      categories: function(callback){
        if (!callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/events/categories'), callback);
      },
      search: function(infoObj, callback){
        if (!infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/events/search', infoObj), callback);
      },
    },
    pages: {
      venues: function(pageId, infoObj, callback){
        if (!pageId || !infoObj || !callback) return fourSquare.fail(callback);
        fourSquare.get(fourSquare.query('/pages/'+pageId+'/venues', infoObj), callback);
      },
    },
    config: {
      set_locale: function(locale){
        fourSquare.locale = locale;
      },
    },
  };
};
