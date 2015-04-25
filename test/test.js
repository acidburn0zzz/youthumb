var test = require('tape');

function getYouTubeID(youtube_url) {
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
}

var tests = [
  { expectedID: '-wtIMTCHWuI', url: 'http://www.youtube.com/watch?v=-wtIMTCHWuI' },
  { expectedID: '-wtIMTCHWuI', url: 'http://www.youtube.com/v/-wtIMTCHWuI?version=3&autohide=1' },
  { expectedID: '-wtIMTCHWuI', url: 'http://youtu.be/-wtIMTCHWuI' },
  { expectedID: 'zc0s358b3Ys', url: 'http://www.youtube.com/embed/zc0s358b3Ys' },
  { expectedID: '-wtIMTCHWuI', url: ' http://www.youtube.com/watch?v=-wtIMTCHWuI ' },
  { expectedID: 'zc0s358b3Ys', url: 'http://youtu.be/zc0s358b3Ys' },
  { expectedID: 'u8nQa1cJyX8', url: 'http://www.youtube.com/watch?v=u8nQa1cJyX8&a=GxdCwVVULXctT2lYDEPllDR0LRTutYfW' },
  { expectedID: 'u8nQa1cJyX8', url: 'http://www.youtube.com/watch?v=u8nQa1cJyX8' },
  { expectedID: 'zc0s358b3Ys', url: 'http://youtu.be/zc0s358b3Ys' },
  { expectedID: 'zc0s358b3Ys', url: 'http://youtu.be/zc0s358b3Ys' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://youtu.be/0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://youtu.be/0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s' },
  { expectedID: 'LXilEPmkoQY', url: 'http://www.youtube.com/embed/LXilEPmkoQY' },
  { expectedID: 'LXilEPmkoQY', url: 'http://www.youtube.com/v/LXilEPmkoQY' },
  { expectedID: 'u8nQa1cJyX8', url: 'http://www.youtube.com/watch?argv=xyzxyzxyzxy&v=u8nQa1cJyX8' },
  { expectedID: '0zM3nApSvMg', url: 'youtube.com/watch?feature=feedrec_grec_index&v=0zM3nApSvMg ' },
  { expectedID: 'y_Rd2hByRyc', url: 'http://www.youtube.com/watch?feature=player_embedded&v=y_Rd2hByRyc' }
];

test('match example cases', function(t) {
  t.plan(tests.length);

  tests.forEach(function(testCase) {
    t.equal(getYouTubeID(testCase.url), testCase.expectedID, 'URL: ' + testCase.url);
  });

});