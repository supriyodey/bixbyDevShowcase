var url = " "    //here goes the google sheet url


module.exports.function = function gettweet () {
  
  var result = http.getUrl(url , {format:"json"})
  var tweet = result.feed.entry[0].title.$t;      //fetching the first entry of the sheet
  
  return [{"Tweet": tweet}]
}
