var url = "https://spreadsheets.google.com/feeds/list/1--daGdaudNwIuQFyXEcLsWRPTegF-aqTkEeahWaLhps/od6/public/basic?alt=json"


module.exports.function = function gettweet () {
  
  var result = http.getUrl(url , {format:"json"})
  var tweet = result.feed.entry[0].title.$t;
  
  return [{"Tweet": tweet}]
}
