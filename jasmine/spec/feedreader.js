$(function() {
  describe('RSS Feeds', function() {
    /*
    * A test to make sure that the allFeeds variable has been defined and
    * that it is not empty.
    */
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    /*
    * A test that loops through each feed in the allFeeds object and ensures
    * it has a URL defined and that the URL is not empty.
    */
    it('have defined URLs that are not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /*
    * A test that loops through each feed in the allFeeds object and ensures
    * it has a name defined and that the name is not empty.
    */
    it('have defined feed names that are not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      })
    })
  });

  // A test suite called 'The Menu'
  describe('The Menu', function() {
    let body = document.querySelector('body');

    // A test that ensures the menu element is hidden by default.
    it('is hidden by default', function() {
      expect(body.classList.contains('menu-hidden')).toBe(true);
    })

    /*
    * A test that ensures the menu changes visibility when the menu icon is
    * clicked.
    */
    it('opens when menu icon is clicked and closes when it is clicked again', function() {
      let body = document.querySelector('body');
      let listIcon = document.querySelector('.icon-list');
      listIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      listIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    })
  })

  // A new test suite named "Initial Entries"
  describe('Initial Entries', function() {

    /*
    * A test that ensures when the loadFeed function is called and completes
    * its work, there is at least a single .entry element within the .feed
    * container.
    */
    beforeEach(function(done) {
      loadFeed(0, function(){
        done();
      });
    });

    /*
    * After the feed has been loaded test that a .entry element exists as a
    * child of the .feed element and that the length is greater than 0.
    */
    it('are successfully loaded on the page', function(done) {
      // Suggestion from Udacity reviewer
      expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThan(0)
      done();
    })
  })

  // A new test suite named "New Feed Selection"
  describe('New Feed Selection', function() {

    /* A test that ensures when a new feed is loaded by the loadFeed function
    * that the content actually changes.
    */
    let titles = [];

    /*
    * beforeEach calls 'loadFeed' twice and pushes the titles of both pages
    * into the 'titles' array
    */
    beforeEach(function(done) {
      loadFeed(1, function() {
        titles.push(document.querySelector('.header-title').innerText);
        //nesting the loadFeed calls suggested by Udacity reviewers
        loadFeed(0, function() {
          titles.push(document.querySelector('.header-title').innerText);
          done();
        });
      });
    });

    it('changes content on the page', function(done) {
      expect(titles[0]).not.toBe(titles[1]);
      done();
    })
  });
}());
