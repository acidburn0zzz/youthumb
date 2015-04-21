var http = require("http");

module.exports = function(youtube_id, callback) {
    
    // request youtube api with youtube id if code is 200 it eqist else not working
    http.get('http://gdata.youtube.com/feeds/api/videos/'+youtube_id, function(res) {
        if (res.statusCode == 200)
            callback(true);
        else
            callback(false);
    });
};