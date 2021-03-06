/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("allFeeds should have a url" , function (){
          allFeeds.forEach(function (feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.lenght).not.toBe(0);
          });

         });

         it("allFeeds should have a name" , function (){
          allFeeds.forEach(function (feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.lenght).not.toBe(0);
          });

         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

      describe("the menu", function (){
            let body,
                check;

            beforeEach(function (){
             body = $("body");
             check = body.hasClass("menu-hidden");
            });

         it("menu elements should be hidden by default", function (){
            expect(check).toBe(true);
         });

         it("should toggle when clicked", function(){
           $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false); //the menu disply when clicked

              // Click again
          $('.menu-icon-link').click();
           expect($('body').hasClass('menu-hidden')).toBe(true); //the menu hide when it'sclicked again
                 });

      });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe("Initial Entries", function (){
           let feed,
               childNumber;
           beforeEach(function (done){
               loadFeed(0 , function (){
                 done();
               });
           });
            it("loadFeed function is called and completes its work" , function (done){
                feed = $(".feed");
                childNumber = feed.children().length;
                 expect(childNumber).not.toBe(0);
                 done();
            });
         });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

      describe("New Feed Selection", function (){
          let feed1,
              feed2;
              beforeEach(function (done){
                loadFeed(0 , function(){
                  feed1 = $(".feed").html();
                  done();
                });
                loadFeed(1, function(){
                  feed2 =  $(".feed").html();
                  done();
                });
              });
              it("different feeds", function (done){
                 expect(feed1).not.toBe(feed2);
                 done();
              });

      });
}());
