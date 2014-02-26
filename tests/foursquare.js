var client = process.env.FS_CLIENT;
var secret = process.env.FS_SECRET;

var foursquare = require('../foursquare.js')(client, secret),
	assert = require('chai').assert;

describe('the foursquare node api', function(){
	this.timeout(5000);
	describe('the venues methods', function(){
		describe('venues#venue()', function(){
			it('gets a venue', function(done){
				foursquare.venues.venue('40a55d80f964a52020f31ee3', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#categories()', function(){
			it('gets categories of venues', function(done){
				foursquare.venues.categories(function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#search()', function(){
			it('gets a list of venues based off a search', function(done){
				foursquare.venues.search({ll:"40.7,-74", radius:20}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#explore()', function(){
			it('gets a list of venues based off a search', function(done){
				foursquare.venues.explore({ll:"40.7,-74", radius:20}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#suggestcompletion()', function(){
			it('suggestion autocompletion', function(done){
				foursquare.venues.suggestcompletion({ll:"44.3,37.2", query: "foursq"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#trending()', function(){
			it('returns a list of trending venues in the area', function(done){
				foursquare.venues.trending({ll:"44.3,37.2", limit: 20}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#events()', function(){
			it('returns a list of events happening at the venue', function(done){
				foursquare.venues.events('40a55d80f964a52020f31ee3', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#hours()', function(){
			it('returns the operating hours at the venue', function(done){
				foursquare.venues.hours('40a55d80f964a52020f31ee3', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#likes()', function(){
			it('returns the number of likes for the venue', function(done){
				foursquare.venues.likes('40a55d80f964a52020f31ee3', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#links()', function(){
			it('returns a list of links for the venue', function(done){
				foursquare.venues.links('40a55d80f964a52020f31ee3', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#listed()', function(){
			it('returns ids of lists the venue is on', function(done){
				foursquare.venues.listed('40a55d80f964a52020f31ee3', {group:"other"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#menu()', function(){
			it('returns the menu if the venue has one', function(done){
				foursquare.venues.menu('40a55d80f964a52020f31ee3', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#photos()', function(){
			it('returns photos of the venue', function(done){
				foursquare.venues.photos('40a55d80f964a52020f31ee3', {group:"venue"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('venues#tips()', function(){
			it('returns the venues tips', function(done){
				foursquare.venues.tips('40a55d80f964a52020f31ee3', {sort:"recent"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
	});
	describe('the tips methods', function(){
		describe('tips#search()', function(){
			it('gets tips based of a query', function(done){
				foursquare.tips.search({ll:"44.3,37.2"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('tips#search()', function(){
			it('gets tips based of a query', function(done){
				foursquare.tips.search({ll:"44.3,37.2"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('tips#done()', function(){
			it('Returns an array of users have done this tip', function(done){
				foursquare.tips.done('4e5b969ab61c4aaa3e183989', {limit:"10"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('tips#likes()', function(){
			it('Returns friends and a total count of users who have liked this tip', function(done){
				foursquare.tips.likes('4e5b969ab61c4aaa3e183989', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('tips#listed()', function(){
			it('The lists that this tip appears on', function(done){
				foursquare.tips.listed('4e5b969ab61c4aaa3e183989', {group:"other"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
	});
	describe('the lists methods', function(){
		describe('lists#detail()', function(){
			it('Gives details about a list', function(done){
				foursquare.lists.detail('50661c87e4b0679acac1d7e9', {limit:"20"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('lists#followers()', function(){
			it('Returns a count and items of users following this list. ', function(done){
				foursquare.lists.followers('50661c87e4b0679acac1d7e9', function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
	});
	describe('specials methods', function(){
		describe('specials#detail()', function(){
			it('Gives details about a special', function(done){
				foursquare.specials.detail('4e0debea922e6f94b1410bb7', {venueId:'4e0deab3922e6f94b1410af3'}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('specials#search()', function(){
			it('searches for specials', function(done){
				foursquare.specials.search({ll:"44.3,37.2"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
	});
	describe('events methods', function(){
		describe('events#categories()', function(){
			it('Returns a hierarchical list of categories applied to events', function(done){
				foursquare.events.categories(function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
		describe('events#search()', function(){
			it('Returns a hierarchical list of categories applied to events', function(done){
				foursquare.events.search({domain:"songkick.com", eventId:"8183976"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
	});
	describe('pages methods', function(){
		describe('pages#venues()', function(){
			it('Allows you to get the page\'s venues', function(done){
				foursquare.pages.venues('1070527', {ll:"44.3,37.2"}, function(err, resp){
					assert.isNull(err);
					assert.isObject(resp);
					done();
				});
			});
		});
	});
});
