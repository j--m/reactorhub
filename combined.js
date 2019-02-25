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
//            height: '350',
//            width: '425',
            videoId: reactorVideoIDString,
            playerVars: { 'enablejsapi' : 1, 'autoplay': 0, 'controls': 1,'rel': 0, 'autohide':1,'wmode':'opaque','origin':'https://reactorhub.github.io' },
            events: {
                'onReady': onReactorReady,
                'onStateChange': onReactorStateChange
            }
        });
        talent = new YT.Player('talent', {
//            height: '350',
//            width: '425',
            playerVars: { 'enablejsapi' : 1, 'autoplay': 0, 'controls': 1,'rel': 0, 'autohide':1,'wmode':'opaque','origin':'https://reactorhub.github.io' },
            videoId: talentVideoIDString
            events: {
                'onReady': onTalentReady,
                'onStateChange': onTelentStateChange
            }
        });
    }
    console.log("third");
    function onReactorReady(event) {
        event.target.playVideo();
        // talent.playVideo();
        console.log("onReactorReady");
    }

    console.log("fourth");
    function onTalentReady(event) {
        event.target.playVideo();
        console.log("onTalentReady");
    }

    function onReactorStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            console.log("onPlayerStateChange");
            talent.playVideo();
        }
    }
    function onTalentStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            console.log("onTalentStateChange");
            reactor.playVideo();
        }
    }
