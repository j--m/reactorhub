      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');


      tag.src = "https://www.youtube.com/iframe_api";
      //tag.src = "https://reactorhub.github.io/iframe.api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var reactor;
      var reactortime = 0;
      function onYouTubeIframeAPIReady() {
        reactor = new YT.Player('reactor', {
          height: '400',
          width: '45%',
          videoId: 'ErCxPH7HQyI',
          playerVars: { 'enablejsapi' : 1, 'autoplay': 0, 'controls': 1,'rel': 0, 'autohide':1,'wmode':'opaque','origin':'https://reactorhub.github.io' },
          events: {
            'onReady': onReactorReady,
            'onStateChange': onReactorStateChange
          }
        });
      }
//    setTimeout(function(){
      // 4. The API will call this function when the video player is ready.
      // This is where we set up and kick off all the psudo-event and command monitors
      function onReactorReady(event) {
        function storeReactorTime() {
          if (typeof(Storage) !== "undefined") {
            // If there is a local storage timer, then set it to the current time of the reactor video
            if ( localStorage.reactortimer) {
               localStorage.reactortimer = reactortime;
              //localStorage.setItem('reactorPlayer', JSON.stringify(player));
              //console.log("local storage is: " +  localStorage.reactortimer);
            } else {
              // no local storage timer? create it and set it to 0
               localStorage.reactortimer = 0;
            }
          }
        }
        // event.target.playVideo();
        // This function is called every 1/10 sec and updates the
        // local storage timer with the current time of the reactor video
        function updateTime() {
          var oldTime = reactortime;
          if(reactor && reactor.getCurrentTime) {
            reactortime = reactor.getCurrentTime();

            // console.log("reactor log is: " + reactortime);
            //document.getElementById("time").innerHTML = reactortime;
          }
          if(reactortime !== oldTime) {
            onProgress(reactortime);
          }
        }
        // Parse the url parameters url

        //var query = window.location.search.substring(1);
        //var qs = parse_query_string(query);
        //console.log("the query is: " + query);
        //console.log("The parsed query string is: " + qs);
        // call the updateTime function every 100 ms
        timeupdater = setInterval(updateTime, 100);
        // call the storeReactorTime
        reactortimeupdater = setInterval(storeReactorTime,100)
      }

      // when the time changes, this will be called.
      function onProgress(currentTime) {
        if(currentTime > 20) {
          console.log("the reactor video reached 20 seconds!");
        }
      }

      function readTime() {
        currentTime = localStorage.timer
        // console.log("Local Reactor Storage Time is: " + currentTime)
      }
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onReactorStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 600000);
          done = true;
        }
      }
      function stopVideo() {
        reactor.stopVideo();
      }
//    }, 9000);
