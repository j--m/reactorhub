      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var talent;
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
        //setTimeout(function(){
        //  event.target.playVideo();
        //}, 189000)
        //set up the read localStorage.timeupdater
        var currentTime
        talenttimerupdater = setInterval(readTime, 100);
      }

      function readTime() {
        currentTime = localStorage.timer
        console.log("Local Storage Time is: " + currentTime)
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
