angular.module('watchController', [])

.controller('watchController', function(Youthumb, $location) {
    
    var vm = this;
    
    vm.youtube_id = $location.search()['v'];
    
    vm.selectedIndex = 0;
    
    vm.disabled = {
        maxres: false,
        standard: false,
        hq: false,
        mq: false
    };
    
    function disableimg(image_id) {
        var img = new Image();
        img.src = vm.youthumbs[image_id];
        img.onload = function() {
            console.log(img.naturalHeight, image_id);
            // Check if the natural height is 90 as that is the height on youtubes error image.
            if (img.naturalHeight == 90 || img.naturalHeight == 0) {
                vm.disabled[image_id] = true;
            }
            else
                vm.disabled[image_id] = false;
        };
    }
    
    // function to set the youthumbs after checking to see if valid link
    function setYouthumbs(youtube_id, valid) {
            if (valid) {
                // build the youthumb link
                vm.youthumbs = Youthumb.build(youtube_id);
                for (var key in vm.youthumbs) {
                    if (key != 'default')
                        disableimg(key);
                }
            }
            else {
                $location.path('/').search({});
            }
    }
    
    if (!vm.youtube_id)
        $location.path('/');
    else {
        
        // check if there is a id and then checck if its valid
        Youthumb.valid(vm.youtube_id, setYouthumbs);
    }
});