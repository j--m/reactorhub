console.log("Initialize");
// to autoresize iframes
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}
// get the url parameters
var url_string = window.location.href;
var url = new URL(url_string);
// This section reads in the various commands and pops them on the storage stack
// default volume
var reactorVOL = 50;
if (url.searchParams.get("reactorVOL") !== null) {
  reactorVOL = url.searchParams.get("reactorVOL");
  localStorage.setItem("reactorVOL", reactorVOL );
}
var YTtalentVOL = 50;
// Youtube talent video
if (url.searchParams.get("YTtalentVOL") !== null) {
  console.log("inside YTtalentVOL search param and add to local Storage")
  YTtalentVOL = url.searchParams.get("YTtalentVOL");
  localStorage.setItem("YTtalentVOL", YTtalentVOL );
}
// DailyMotion talent video
console.log("DMtalentVOL is: " + url.searchParams.get("DMtalentVOL"));
var DMtalentVOL = 50;
if (url.searchParams.get("DMtalentVOL") !== null) {
  talentVOL = url.searchParams.get("DMtalentVOL");
}

console.log("starting reactor volume is: " + reactorVOL);
console.log("starting Youtube talent volume is: " + YTtalentVOL);
console.log("starting DailyMotion talent volume is: " + DMtalentVOL);
// This part provides talentVideoIDString used in the combined.js loaded in this index.html.
function getVideoIdFromURL(url) {
  console.log("Function url is: " + url);
  delimiter = '=',
  start = 1,
  tokens = url.split(delimiter).slice(start),
  result = tokens.join(delimiter); // those.that
  console.log("Function url pathname is: " + result);
  return result;
}
  if (url.searchParams.get("reactor") !== null){
    var reactorVideoURL = url.searchParams.get("reactor");
  }
  if (url.searchParams.get("YTtalent") !== null) {
    var YTtalentVideoURL = url.searchParams.get("YTtalent");
  }
  if (url.searchParams.get("DMtalent") !== null){
    var DMtalentVideoURL = url.searchParams.get("DMtalent");
  }
  if (reactorVideoURL){
    var reactorVideoID = getVideoIdFromURL(reactorVideoURL);
  }
  if (YTtalentVideoURL){
    var YTtalentVideoID = getVideoIdFromURL(YTtalentVideoURL);
  }
  if (DMtalentVideoURL ){
    var DMtalentVideoID = getVideoIdFromURL(DMtalentVideoURL);
  }

  // These are the two vars we need to use as the videoId for YT.Player objects
  var reactorVideoIDString = new String(reactorVideoID);
  var YTtalentVideoIDString = new String(YTtalentVideoID);
  var DMtalentVideoIDString = new String(DMtalentVideoID);
  // Save to local Storage
  localStorage.setItem("reactorVideoID", reactorVideoIDString );
  localStorage.setItem("YTtalentVideoID", YTtalentVideoIDString );
  localStorage.setItem("DMtalentVideoID", DMtalentVideoIDString );
  console.log("Index: YTtalentVideoURL: " + YTtalentVideoIDString);
  console.log("Index: DMtalentVideoID: " + DMtalentVideoIDString);
  console.log("Index: reactorVideoID: " + reactorVideoIDString);
  // console.log("talentVideoURL: " + talentVideoURL);
