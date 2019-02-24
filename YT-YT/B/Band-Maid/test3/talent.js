      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var talent;
      var talenttime = 0;
      function onYouTubeIframeAPIReady() {
        talent = new YT.Player('talent', {
          height: '400',
          width: '45%',
          videoId: '9TkHpvaO09c',
          events: {
            'onReady': onTalentReady,
            'onStateChange': onTalentStateChange
          }
        });
      }
//    setTimeout(function(){
      // 4. The API will call this function when the video player is ready.
      function onTalentReady(event) {
        function storeTalentTime() {
          if (typeof(Storage) !== "undefined") {
            // If there is a local storage timer, then set it to the current time of the reactor video
            if ( localStorage.talenttimer) {
               localStorage.talenttimer = talenttime;
              //localStorage.setItem('reactorPlayer', JSON.stringify(player));
              //console.log("local storage is: " +  localStorage.reactortimer);
            } else {
              // no local storage timer? create it and set it to 0
               localStorage.talenttimer = 0;
            }
          }
        }
        // event.target.playVideo();
        // This function is called every 1/10 sec and updates the
        // local storage timer with the current time of the reactor video
        function updateTime() {
          var oldTime = talenttime;
          if(talent && talent.getCurrentTime) {
            talenttime = talent.getCurrentTime();

            console.log("talent log is: " + talenttime);
            //document.getElementById("time").innerHTML = talenttime;
          }
          if(talenttime !== oldTime) {
            onProgress(talenttime);
          }
        }
        // call the updateTime function every 100 ms
        timeupdater = setInterval(updateTime, 100);
        // call the storeReactorTime
        talenttimeupdater = setInterval(storeTalentTime,100)
      }

      // when the time changes, this will be called.
      function onProgress(currentTime) {
        if(currentTime > 20) {
          console.log("the talent video reached 20 seconds!");
        }
      }

      function readTime() {
        currentTime = localStorage.timer
        console.log("Local Talent Storage Time is: " + currentTime)
      }
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onTalentStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 600000);
          done = true;
        }
      }
      function stopVideo() {
        talent.stopVideo();
      }
//    }, 9000);
