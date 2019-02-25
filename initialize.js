console.log("Initialize");
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}
var url_string = window.location.href;
var url = new URL(url_string);
// This section reads in the various commands and pops them on the storage stack
var reactorVOL = 50;
var talentVOL = 50;
if (url.searchParams.get("reactorVOL")) {
  reactorVOL = url.searchParams.get("reactorVOL");
}
var talentVOL = 50;
if (url.searchParams.get("talentVOL")) {
  talentVOL = url.searchParams.get("talentVOL");
}
console.log("reactor volume is: " + reactorVOL);
console.log("talent volume is: " + talentVOL);
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

  var reactorVideoURL = url.searchParams.get("reactor");
  var talentVideoURL = url.searchParams.get("talent");
  var reactorVideoID = getVideoIdFromURL(reactorVideoURL);
  var talentVideoID = getVideoIdFromURL(talentVideoURL);
  // These are the two vars we need to use as the videoId for YT.Player objects
  var reactorVideoIDString = new String(reactorVideoID);
  var talentVideoIDString = new String(talentVideoID);
  // Save to local Storage
  localStorage.setItem("reactorVideoID", reactorVideoIDString );
  localStorage.setItem("talentVideoID", talentVideoIDString );
  console.log("Index: talentVideoURL: " + talentVideoURLString);
  console.log("Index: reactorVideoID: " + reactorVideoIDString);
  // console.log("talentVideoURL: " + talentVideoURL);
