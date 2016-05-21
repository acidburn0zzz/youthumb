angular.module('watchController', [])

.controller('watchController', function(Youthumb, $location) {
    
    var vm = this;
    
    vm.youtube_id = $location.search()['v'];
    
    vm.selectedIndex = 0;
    
    if (!vm.youtube_id)
        $location.path('/');

    else {
        
        // check if there is a id and then checck if its valid
        Youthumb.valid(vm.youtube_id, function(valid){

            if (valid) {
                // build the youthumb link
                Youthumb.build(vm.youtube_id)
                    .success(function(data) {
                        vm.youthumbs = data.items[0].snippet.thumbnails;
                    })
                    .error(function(data) {
                        vm.error = "Dunno some error";
                    });

            }

            else {

                $location.path('/').search({});

            }
        });

    }

});