angular.module('youthumbService', [])

.factory('Youthumb', function($http) {
    
    // create a new object
    var youthumbFactory = {};
    
    // strip the youtube id from a youtube url
    youthumbFactory.stripLink = function(youtube_url) {
        var youtube_id = '';

        var n1 = youtube_url.indexOf('&');
        var n2 = youtube_url.indexOf('v=');
        var n3 = youtube_url.indexOf('be/');
        var n4 = youtube_url.indexOf('?');
    
        if (n3 != -1) {
            if (n4 != -1) {
        		youtube_id = youtube_url.substring(n3+3,n3+14);
        	} else {
        		youtube_id = youtube_url.substring(n3+3);
        	}
        } else if (n1 != -1) {
        	youtube_id = youtube_url.substring(n2+2, n2+13);
        } else {
        	youtube_id = youtube_url.substring(n2+2);
        }
        
        return youtube_id;
    };
    
    // find out if its valid id
    youthumbFactory.valid = function(youtube_id, callback) {
        $http.get('https://gdata.youtube.com/feeds/api/videos/'+youtube_id)
            .success(function(data, status){
                callback(true);
            })
            .error(function(data, status) {
                callback(false);
            });
    };
    
    // build thumbnai links
    youthumbFactory.build = function(youtube_id) {
        return $http.get('/api/youthumb/'+youtube_id);
    };
    
    return youthumbFactory; 
});