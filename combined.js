    console.log("first");
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var reactor;
    var talent;
    console.log("second");
    function onYouTubeIframeAPIReady() {
        reactor = new YT.Player('reactor', {
            height: '350',
            width: '425',
            videoId: 'OdT9z-JjtJk',
            events: {
                'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
            }
        });
        talent = new YT.Player('talent', {
            height: '350',
            width: '425',
            videoId: 'xmxEuQXTHUU'
        });
    }
    console.log("third");
    function onPlayerReady(event) {
        event.target.playVideo();
        console.log("onPlayerReady");
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            talent.playVideo();
        }
    }
