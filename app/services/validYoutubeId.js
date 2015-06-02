var https = require("https");

module.exports = function(youtube_id, callback) {
    
    // request youtube api with youtube id if code is 200 it eqist else not working
    https.get('https://www.youtube.com/watch?v='+youtube_id, function(res) {
        if (res.statusCode == 200)
            callback(true);
        else
            callback(false);
    });
};