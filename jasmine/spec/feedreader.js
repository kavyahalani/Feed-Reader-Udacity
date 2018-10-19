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
    //This will contain all the test cases for RSS feeds under different test suites below:

    /*This test suite is defined for Feeds' URL and Name
    * that appears as links
    * and to check if each feed element is defined and not empty*/
    describe('RSS Feeds', function() {

        //Test case to check if feed element under allFeeds array is defined and not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Test case to check if all the feed elements has their URL defined and not empty.
        it('has all URLs defined and not empty', function(){
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        })

        ///Test case to check if all the feed elements has their names defined and not empty.
        it('has all names for URL defined and not empty', function(){
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        })
    });


   /* This test suite is defined to check for the Menu's default behavior
    * and its working on clicking */
    describe('The Menu', function(){

        //Test case to check if the Menu is hidden by default when the content is loaded.
        it('Menu is hidden by default', function(){
            expect(document.body.classList.contains('menu-hidden')).toBe(true)})

        //Test case to check if the Menu's visibility on click event.
        it('Menu click', function(){
            $('.menu-icon-link').click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        
        })
        })

     // This test suite is defined to check for Intial entries. 
    describe('Initial Entries', function(){

            /* Test case to check if there is at least one .entry element
             * within .feed container,
             * when loadFeed function is loaded. */
            beforeEach(function(done){
                loadFeed(0,done);
            })
            it('has at least single entry.', function(){
                console.log(($(".feed .entry")));
                expect($('.feed .entry').length).not.toBe(0); 
        })   
    })

    // This test suite is defined to check for different content in feed every time new feed is loaded.
    describe('New Feed Selection', function(){

        //To store and compare the content of feeds.
        let feed0,feed1;
        beforeEach(function(done){
            loadFeed(0,function(){
                feed0 = $(".entry")[0].innerHTML;
                console.log(feed0);
                loadFeed(1,function(){
                    feed1= $(".entry")[0].innerHTML;
                    done();
                })
            })
        })

        //Test case to check if the content of feed changes when new feed is loaded, here loadFeed function is asynchronous.
        it('has different content for each feed',function(){
            expect(feed0).not.toBe(feed1);
        })   
    })
}());
