// CREATE VIDEOS "CLASS" to handler videos
var Videos = (function() {
    // VARIABLES
    var $   = jQuery,   // The jquery
    players = [],       // players array (to coltrol players individually)
    queue   = [];       // videos queue (once api is ready, transform this into YT player)

    // Constructor
    function Videos() {}

    // METHODS
    // Add elements to queue
    Videos.prototype.add = function($video) {
        queue.push($video);
    };

    // Load YT API
    Videos.prototype.loadApi = function() {
        // jQuery get script
        $.getScript("//www.youtube.com/iframe_api", function() {
            // once loaded, create the onYouTubeIframeAPIReady function
            window.onYouTubeIframeAPIReady = function() {
                queue.forEach(function($video) {
                    // Create the YT player
                    var player = new YT.Player($video.get(0), {
                        'width': "100%",
                        'height': "100%",
                        'videoId': $video.data("id")
                    });
                    // add to players array
                    players.push(player);
                });
            };
        });
    };

    return Videos;

})();

var videos = new Videos();
$('.video').each( function () {
    videos.add( $(this) );
})
videos.loadApi();
