angular.module('youthumbService', [])

.factory('Youthumb', function($http) {
    
    var youtube_key = 'API_KEY';

    // create a new object
    var youthumbFactory = {};
    
    // strip the youtube id from a youtube url
    youthumbFactory.stripLink = function(youtube_url) {
        var youtube_id = '';

        var n1 = youtube_url.indexOf('&v=');
        var n2 = youtube_url.indexOf('?v=');
        var n3 = youtube_url.indexOf('be/');
        var n4 = youtube_url.indexOf('v/');
        var n5 = youtube_url.indexOf('ed/');
    
        if (n5 != -1) {
        	youtube_id = youtube_url.substring(n5+3,n5+14);
        } else if (n3 != -1) {
        	youtube_id = youtube_url.substring(n3+3, n3+14);
        } else if (n4 != -1) {
            youtube_id = youtube_url.substring(n4+2, n4+13);
        } else if (n1 != -1) {
            youtube_id = youtube_url.substring(n1+3, n1+14);
        } else {
        	youtube_id = youtube_url.substring(n2+3, n2+14);
        }
        
        return youtube_id;
    };
    
    // find out if its valid id
    youthumbFactory.valid = function(youtube_id, callback) {
        $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+youtube_id+'&key='+youtube_key)
            .success(function(data, status){
                if (data.pageInfo.totalResults == 1)
                    callback(true);
                else
                    callback(false);
            })
            .error(function(data, status) {
                callback(false);
            });
    };
    
    // build thumbnai links
    youthumbFactory.build = function(youtube_id) {
        return $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+youtube_id+'&key='+youtube_key);
    };
    
    return youthumbFactory; 
});